# Tropical Wood Inc. - Web Application

A modern web application for Tropical Wood Inc., a division of Roi Lux, showcasing premium wood products from Cameroon.

## Tech Stack

### Frontend
- React.js
- Material-UI (MUI)
- i18next for internationalization
- Framer Motion for animations

### Backend
- FastAPI (Python)
- PostgreSQL
- SQLAlchemy ORM

### Infrastructure
- Docker & Docker Compose
- Nginx for serving the frontend
- PostgreSQL for database

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)
- Python 3.11+ (for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/tropical-wood.git
cd tropical-wood
```

2. Create environment files:
```bash
# Backend
cp backend/.env.example backend/.env
# Frontend
cp frontend/.env.example frontend/.env
```

3. Start the application using Docker:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Development

#### Frontend Development
```bash
cd frontend
npm install
npm start
```

#### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Project Structure

```
tropical-wood/
├── frontend/               # React frontend application
│   ├── public/            # Static files
│   ├── src/              # Source code
│   │   ├── components/   # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   └── locales/     # Translation files
│   └── Dockerfile       # Frontend Docker configuration
├── backend/              # FastAPI backend application
│   ├── app/             # Application code
│   ├── static/          # Static files
│   ├── templates/       # HTML templates
│   └── Dockerfile       # Backend Docker configuration
└── docker-compose.yml   # Docker Compose configuration
```

## Features

- 🌐 Multi-language support (English & French)
- 📱 Responsive design
- 🔒 Secure API endpoints
- 🎨 Modern UI with Material Design
- 📊 Product catalog
- 📝 Contact form
- 🏭 Factory visit scheduling
- 🔍 Search functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Tropical Wood Inc. - [contact@tropicalwood.com](mailto:contact@tropicalwood.com)

Project Link: [https://github.com/your-username/tropical-wood](https://github.com/your-username/tropical-wood) 