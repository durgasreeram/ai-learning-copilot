from jose import jwt, JWTError
from datetime import datetime, timedelta

SECRET_KEY = "password" #wout this jwt token cant be modified 
ALGORITHM = "HS256"  #beginner alg
ACCESS_TOKEN_EXP_MINUTES = 60 #Token lifetime

def create_access_token(data: dict):

    to_encode = data.copy() #we dont directly modify the data itself, so took copy of it

    expire = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXP_MINUTES) #expiry time calculation

    to_encode.update({"exp": expire}) #appends expire time to datacopy(to_encode)

    encoded_jwt = jwt.encode( #encoding of to_encode along with key and alg
        to_encode,
        SECRET_KEY,
        algorithm = ALGORITHM
    )

    return encoded_jwt


#verify tokens
def verify_token(token: str):

    try:
        payload = jwt.decode(       #decoding the token and verifying the token's expiry time, any modifications
            token,
            SECRET_KEY,
            algorithms = [ALGORITHM]
        )

        return payload

    except JWTError:            # if expired or modified -> returns none
        return None