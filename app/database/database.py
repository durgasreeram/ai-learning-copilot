from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://postgres:password@localhost:5432/ai_learning_copilot"

engine = create_engine(database_url)

SessionLocal = sessionmaker(
    autocommit = False,
    autoflush = False
    bind = engine
)

 Base = declartive_base()
