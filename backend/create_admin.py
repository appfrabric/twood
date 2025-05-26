import os
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import auth
from dotenv import load_dotenv

load_dotenv()

def create_admin_user():
    # Ensure tables are created
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Check if admin user already exists
        admin = db.query(models.User).filter(models.User.email == "arthur.samed@gmail.com").first()
        if admin:
            print("Admin user already exists")
            return

        # Create admin user
        admin_password = "Th3B@lako2030"  # Your new password
        hashed_password = auth.get_password_hash(admin_password)
        admin_user = models.User(
            email="arthur.samed@gmail.com",
            hashed_password=hashed_password,
            is_admin=True
        )
        db.add(admin_user)
        db.commit()
        print("Admin user created successfully")
    except Exception as e:
        print(f"Error creating admin user: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_admin_user() 