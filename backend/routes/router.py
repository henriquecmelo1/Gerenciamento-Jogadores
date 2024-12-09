from fastapi import APIRouter
from config.database import db
from models.playerModel import PlayerModel
from schemas.playerSchema import playerListEntity, playerEntity
from bson import ObjectId

router = APIRouter()

@router.get("/players")
async def get_players():
    return playerListEntity(db.find())

@router.get("/players/{player_id}")
async def get_player_by_id(player_id: str):
    return playerEntity(db.find_one({'_id': ObjectId(player_id)}))


@router.post("/players")
async def create_player(player: PlayerModel):
    db.insert_one(dict(player))
    return playerListEntity(db.find())

@router.put("/players")
async def update_player(player_id: str, player: PlayerModel):
    db.find_one_and_update({'_id': ObjectId(player_id)}, {'$set': dict(player)})

    return playerEntity(db.find_one({'_id': ObjectId(player_id)}))


@router.delete("/players/{player_id}")
async def delete_player(player_id: str):
    db.find_one_and_delete({'_id': ObjectId(player_id)})
    return playerListEntity(db.find())


