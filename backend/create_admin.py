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
        # Get admin credentials from environment variables
        admin_email = os.getenv("ADMIN_EMAIL")
        admin_password = os.getenv("ADMIN_PASSWORD")
        # admin_first_name = os.getenv("ADMIN_FIRST_NAME", "Admin")
        # admin_last_name = os.getenv("ADMIN_LAST_NAME", "User")

        if not admin_email or not admin_password:
            print("Error: ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables")
            return

        # Check if admin user already exists
        admin = db.query(models.User).filter(models.User.email == admin_email).first()
        if admin:
            print(f"Admin user {admin_email} already exists")
            return

        # Create admin user
        hashed_password = auth.get_password_hash(admin_password)
        admin_user = models.User(
            email=admin_email,
            hashed_password=hashed_password,
            is_admin=True
        )
        db.add(admin_user)
        db.commit()
        print(f"Admin user {admin_email} created successfully")
    except Exception as e:
        print(f"Error creating admin user: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_admin_user() 