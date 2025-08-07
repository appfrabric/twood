# Use Node.js as the base image
FROM node:18-alpine

# Install system dependencies including PostgreSQL
RUN apk add --no-cache \
    python3 \
    py3-pip \
    postgresql \
    postgresql-client \
    nginx \
    supervisor \
    build-base \
    python3-dev \
    libffi-dev \
    openssl-dev \
    cargo

# Set up PostgreSQL
RUN mkdir -p /run/postgresql && \
    chown -R postgres:postgres /run/postgresql && \
    mkdir -p /var/lib/postgresql/data && \
    chown -R postgres:postgres /var/lib/postgresql/data && \
    chmod 700 /var/lib/postgresql/data

# Set up working directory
WORKDIR /app

# Copy frontend files
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build && \
    mkdir -p /usr/share/nginx/html && \
    cp -r build/* /usr/share/nginx/html/

# Set up Python virtual environment
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# Copy backend files
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend/ ./backend/

# Copy nginx configuration
COPY frontend/nginx.conf /etc/nginx/http.d/default.conf

# Fix permissions for PostgreSQL data directory after all COPYs
RUN chown -R postgres:postgres /var/lib/postgresql/data && chmod 700 /var/lib/postgresql/data

# Create startup script using heredoc for clarity
RUN cat <<'EOF' > /app/start.sh
#!/bin/sh
set -e
echo "Fixing permissions for PostgreSQL data directory..."
chown -R postgres:postgres /var/lib/postgresql/data
chmod 700 /var/lib/postgresql/data
echo "Starting PostgreSQL initialization..."
if [ ! -f /var/lib/postgresql/data/PG_VERSION ]; then
  echo "Initializing PostgreSQL database..."
  su postgres -c "initdb -D /var/lib/postgresql/data"
  echo "Configuring PostgreSQL..."
  echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
  echo "listen_addresses=*" >> /var/lib/postgresql/data/postgresql.conf
fi

echo "Starting PostgreSQL..."
su postgres -c "pg_ctl -D /var/lib/postgresql/data -l /var/lib/postgresql/data/postgresql.log start"

echo "Waiting for PostgreSQL to be ready..."
until PGPASSWORD=roilux psql -h localhost -U postgres -c "SELECT 1" > /dev/null 2>&1; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done
echo "PostgreSQL is up - creating user and database..."

su postgres -c "psql -tc \"SELECT 1 FROM pg_roles WHERE rolname='roilux'\" | grep -q 1 || psql -c \"CREATE USER roilux WITH PASSWORD 'roilux';\""
su postgres -c "psql -tc \"SELECT 1 FROM pg_database WHERE datname='roilux'\" | grep -q 1 || psql -c \"CREATE DATABASE roilux OWNER roilux;\""

echo "Starting supervisor..."
exec /usr/bin/supervisord -c /etc/supervisord.conf
EOF
RUN chmod +x /app/start.sh

# Create wait script (after all other file operations)
RUN echo '#!/bin/sh\nset -e\necho "Waiting for PostgreSQL..."\nuntil PGPASSWORD=roilux psql -h localhost -U roilux -d roilux -c "SELECT 1" > /dev/null 2>&1; do\n  echo "PostgreSQL is unavailable - sleeping"\n  sleep 1\ndone\necho "PostgreSQL is up - executing command"\n' > /app/wait-for-postgres.sh && chmod +x /app/wait-for-postgres.sh

# Copy supervisor configuration
RUN echo "[supervisord]" > /etc/supervisord.conf && \
    echo "nodaemon=true" >> /etc/supervisord.conf && \
    echo "logfile=/var/log/supervisord.log" >> /etc/supervisord.conf && \
    echo "logfile_maxbytes=50MB" >> /etc/supervisord.conf && \
    echo "logfile_backups=10" >> /etc/supervisord.conf && \
    echo "loglevel=info" >> /etc/supervisord.conf && \
    echo "[program:postgresql]" >> /etc/supervisord.conf && \
    echo "command=/usr/bin/postgres -D /var/lib/postgresql/data -c listen_addresses='*'" >> /etc/supervisord.conf && \
    echo "user=postgres" >> /etc/supervisord.conf && \
    echo "priority=1" >> /etc/supervisord.conf && \
    echo "stdout_logfile=/var/log/postgresql.log" >> /etc/supervisord.conf && \
    echo "stderr_logfile=/var/log/postgresql.error.log" >> /etc/supervisord.conf && \
    echo "[program:wait-for-postgres]" >> /etc/supervisord.conf && \
    echo "command=/app/wait-for-postgres.sh" >> /etc/supervisord.conf && \
    echo "priority=2" >> /etc/supervisord.conf && \
    echo "stdout_logfile=/var/log/wait-for-postgres.log" >> /etc/supervisord.conf && \
    echo "stderr_logfile=/var/log/wait-for-postgres.error.log" >> /etc/supervisord.conf && \
    echo "[program:backend]" >> /etc/supervisord.conf && \
    echo "command=/app/venv/bin/python /app/backend/main.py" >> /etc/supervisord.conf && \
    echo "directory=/app/backend" >> /etc/supervisord.conf && \
    echo "priority=3" >> /etc/supervisord.conf && \
    echo "stdout_logfile=/var/log/backend.log" >> /etc/supervisord.conf && \
    echo "stderr_logfile=/var/log/backend.error.log" >> /etc/supervisord.conf && \
    echo "[program:nginx]" >> /etc/supervisord.conf && \
    echo "command=nginx -g 'daemon off;'" >> /etc/supervisord.conf && \
    echo "priority=4" >> /etc/supervisord.conf && \
    echo "stdout_logfile=/var/log/nginx.log" >> /etc/supervisord.conf && \
    echo "stderr_logfile=/var/log/nginx.error.log" >> /etc/supervisord.conf

# Create log directory
RUN mkdir -p /var/log && \
    touch /var/log/supervisord.log /var/log/postgresql.log /var/log/postgresql.error.log \
          /var/log/wait-for-postgres.log /var/log/wait-for-postgres.error.log \
          /var/log/backend.log /var/log/backend.error.log \
          /var/log/nginx.log /var/log/nginx.error.log && \
    chmod 777 /var/log/*

# Set environment variables
ENV POSTGRES_USER=roilux
ENV POSTGRES_PASSWORD=roilux
ENV POSTGRES_DB=roilux
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5432
ENV SECRET_KEY=your-secret-key-here
ENV ADMIN_PASSWORD=admin123
ENV REACT_APP_API_URL=/api

# Expose ports
EXPOSE 80

# Start all services using the startup script
CMD ["/app/start.sh"] 