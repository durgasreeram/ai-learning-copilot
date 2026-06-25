from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.utils.dependencies import get_current_user
from app.models.chat import Chat
from app.models.user import User
from app.services.gemini_service import generate_response

router = APIRouter(
    prefix = "/ai",
    tags = ["AI"]
)

@router.post("/chat")
def chat(
    message: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    ai_response = generate_response(message)
    chat = Chat(
        user_id = current_user.id,
        prompt = message,
        response = ai_response
    )

    db.add(chat)
    db.commit()

    return {
        "response": ai_response
    }