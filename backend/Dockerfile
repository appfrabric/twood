FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create necessary directories
RUN mkdir -p static templates

# Create a script to wait for the database and initialize it
RUN echo '#!/bin/bash\necho "Waiting for database..."\nwhile ! nc -z db 5432; do\n  sleep 0.1\ndone\necho "Database is up!"\npython create_admin.py\nuvicorn main:app --host 0.0.0.0 --port 8000\n' > /app/start.sh

RUN chmod +x /app/start.sh

CMD ["/app/start.sh"] 