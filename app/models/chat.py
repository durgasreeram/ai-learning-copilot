from sqlalchemy import Column, Integer, String, Text, ForeignKey
from app.database.database import Base 

class Chat(Base):

    __tablename__ = "chats"

    id = Column(Integer, primary_key = True, index = True)

    user_id = Column(Integer, ForeignKey("users.id"))

    prompt = Column(Text)

    response = Column(Text)