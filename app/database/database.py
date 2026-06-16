from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://postgres:password@localhost:5432/ai_learning_copilot"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit = False,
    autoflush = False,
    bind = engine
)

Base = declarative_base()


def get_db():
    db = SessionLocal()

    try: 
        yield db

    finally: 
        db.close()

        






























try:
    with engine.connect() as connection:
        print("✅ PostgreSQL Connected Successfully")
except Exception as e:
    print("❌ Connection Failed:", e)

    