from pydantic import BaseModel

class ChatResponse(BaseModel):
    id: int
    prompt: str
    response: str

    class Config:
        from_attributes = True
