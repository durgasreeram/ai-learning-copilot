from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin
from app.utils.security import hash_password, verify_password
from app.utils.jwt import create_access_token
from app.utils.dependencies import get_current_user


router = APIRouter(
    prefix = "/auth",
    tags = ["Authentication"]
)

#j to test
@router.get("/test")
def test():
    return "Auth is working"


#register api
@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

#checking wheather email is already registered
    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code = 400,
            detail = "User already exists!"
        )

#user object creation (still no hashing)
    new_user = User(
        name = user.name,
        email = user.email,
        password_hash = hash_password(user.password)
    )

    db.add(new_user)
    db.commit()

    return{
        "message": "User registration successful!"
    }




#login api

@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(        #verify if alr exists
        User.email == user.email
    ).first()

    if not db_user:
        raise HTTPException(        #if email alr exists
            status_code = 401,
            detail = "Invalid Credentials"
        )
    
    if not verify_password(         #if wrong password 
        user.password,
        db_user.password_hash
    ):
        raise HTTPException(        
            status_code = 401,
            detail = "Invalid Credentials"
        )

    access_token = create_access_token({       #creates token
        "sub": db_user.email
    }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


# profile api

@router.get("/profile")
def profile(
    current_user: user = Depends(get_current_user)
):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email
    }
    