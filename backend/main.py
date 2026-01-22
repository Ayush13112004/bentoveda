from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# --- 1. Database Setup (SQLite) ---
# This creates a file named 'subscribers.db' in your folder
DATABASE_URL = "sqlite:///./subscribers.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Define the Table
class Subscriber(Base):
    __tablename__ = "subscribers"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)

# Create the database tables automatically
Base.metadata.create_all(bind=engine)

# --- 2. Pydantic Models (Validation) ---
# This ensures the user actually sends a valid email format
class EmailSchema(BaseModel):
    email: EmailStr

class SubscriberResponse(BaseModel):
    id: int
    email: str

    class Config:
        from_attributes = True

# --- 3. FastAPI App Setup ---
app = FastAPI()

# Enable CORS so your React Frontend (port 5173) can talk to this Backend (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Allow your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- 4. API Endpoints ---

@app.post("/api/join", response_model=SubscriberResponse)
def join_list(entry: EmailSchema, db: Session = Depends(get_db)):
    # Check if email already exists
    existing_user = db.query(Subscriber).filter(Subscriber.email == entry.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Save new email
    new_subscriber = Subscriber(email=entry.email)
    db.add(new_subscriber)
    db.commit()
    db.refresh(new_subscriber)
    return new_subscriber

@app.get("/api/submissions")
def get_submissions(db: Session = Depends(get_db)):
    # Fetch all emails for the Admin Dashboard
    return db.query(Subscriber).all()

@app.get("/")
def health_check():
    return {"status": "running", "message": "BentoVeda Backend is Active"}