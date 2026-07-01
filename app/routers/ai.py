from fastapi import Depends, APIRouter, HTTPException 
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.utils.dependencies import get_current_user
from app.models.chat import Chat
from app.models.user import User
from app.services.gemini_service import generate_response
from app.schemas.chat import ChatResponse
from sqlalchemy import desc

router = APIRouter(
    prefix = "/ai",
    tags = ["AI"]
)

@router.post("/chat")
def chat(
    message: str,
    db: Session = Depends(get_db),                      #dependency injection of db 
    current_user: User = Depends(get_current_user)      #jwt protected
):

    try:
        ai_response = generate_response(message)    #prompt given, response taken 
    
    except Exception:
        raise HTTPException(
            status_code = 500, 
            detail = "AI Service Unavailable!"
        )



    chat = Chat(
        user_id = current_user.id,
        prompt = message,
        response = ai_response,
        #chat_title = message[:50]
    )                                           #adding the previous chats to db

    db.add(chat)
    db.commit()

    return {
        "response": ai_response
    }

@router.get(
        "/history",
        response_model = list[ChatResponse]         #getting history of old chats 
        )
def get_history(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    chats = db.query(Chat).filter(
        Chat.user_id == current_user.id
    ).all()

    return chats


@router.get("/chat/{chat_id}", response_model = ChatResponse)
def get_chat(
    chat_id: int,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    chat = (
        db.query(Chat)
        .filter(
            Chat.id == chat_id,
            Chat.user_id == current_user.id

        )
        .first()
    )

    if not chat: 
        raise HTTPException(
            status = 404,
            detail = "Chat not Found"
        )
    
    return chat

