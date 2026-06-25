from fastapi import FastAPI
from app.database.database import engine, Base
from app.models.user import User
from app.routers.auth import router as auth_router
from app.models.chat import Chat
from app.routers.ai import router as ai_router 

Base.metadata.create_all(bind = engine)

app = FastAPI()

app.include_router(auth_router)

app.include_router(ai_router)

@app.get("/")
def home():
    return "Welcome to AI Learning copilot"