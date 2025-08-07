from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import timedelta
import models
import schemas
import auth
from database import engine, get_db
from typing import List

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tropical Wood API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Authentication endpoints
@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    print("=== Login Request Details ===")
    print(f"Username: {form_data.username}")
    print(f"Grant Type: {form_data.grant_type}")
    print(f"Scope: {form_data.scopes}")
    print(f"Client ID: {form_data.client_id}")
    print(f"Client Secret: {form_data.client_secret}")
    print("===========================")

    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user:
        print(f"User not found: {form_data.username}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not auth.verify_password(form_data.password, user.hashed_password):
        print(f"Invalid password for user: {form_data.username}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    print(f"Login successful for user: {form_data.username}")
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/users/", response_model=schemas.User)
async def create_user(
    user: schemas.UserCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_admin_user)
):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Contact form endpoints
@app.post("/contact/", response_model=schemas.ContactForm)
async def create_contact_form(
    contact_form: schemas.ContactFormCreate,
    db: Session = Depends(get_db)
):
    db_contact_form = models.ContactForm(**contact_form.model_dump())
    db.add(db_contact_form)
    db.commit()
    db.refresh(db_contact_form)
    return db_contact_form

@app.get("/contact/", response_model=List[schemas.ContactForm])
async def get_contact_forms(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_admin_user)
):
    contact_forms = db.query(models.ContactForm).offset(skip).limit(limit).all()
    return contact_forms

@app.get("/contact/{contact_id}", response_model=schemas.ContactForm)
async def get_contact_form(
    contact_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_admin_user)
):
    contact_form = db.query(models.ContactForm).filter(models.ContactForm.id == contact_id).first()
    if contact_form is None:
        raise HTTPException(status_code=404, detail="Contact form not found")
    return contact_form

@app.put("/contact/{contact_id}", response_model=schemas.ContactForm)
async def update_contact_form(
    contact_id: int,
    status_update: schemas.ContactFormStatusUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_admin_user)
):
    contact_form = db.query(models.ContactForm).filter(models.ContactForm.id == contact_id).first()
    if contact_form is None:
        raise HTTPException(status_code=404, detail="Contact form not found")
    
    contact_form.status = status_update.status
    contact_form.processed_by_id = current_user.id
    db.commit()
    db.refresh(contact_form)
    return contact_form

@app.get("/")
async def root():
    return {"message": "Welcome to Tropical Wood API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"} 