from pydantic import BaseModel
from datetime import datetime

class ChatResponse(BaseModel):
    id: int
    prompt: str
    response: str

    class Config:
        from_attributes = True
