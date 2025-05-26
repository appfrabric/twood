from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ContactFormBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str

class ContactFormCreate(ContactFormBase):
    pass

class ContactForm(ContactFormBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    processed_by_id: Optional[int] = None

    class Config:
        from_attributes = True

class ContactFormStatusUpdate(BaseModel):
    status: str

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    is_admin: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None 