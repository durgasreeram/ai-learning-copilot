from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.utils.jwt import verify_token
from app.models.user import User

oauth2_scheme = OAuth2PasswordBearer(           #reads authorization and bearer and extracts token
    tokenUrl = "/auth/login"
)

def get_current_user(                           
    token: str = Depends(oauth2_scheme),        
    db: Session = Depends(get_db)
):
    payload = verify_token(token)

    if not payload:                     # if verify token retuns false
        raise HTTPException(
            status_code = 401,
            detail = "Invalid Token"
        )

    email = payload.get("sub")

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code = 401,
            detail = "User Not Found"
        )

    return user
