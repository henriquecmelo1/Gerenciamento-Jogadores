from pydantic import BaseModel

class PlayerModel(BaseModel):
    name: str
    age: int
    team: str