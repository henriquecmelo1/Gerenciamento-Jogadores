def playerEntity(db_item) -> dict:
    return {
        'id': str(db_item['_id']),
        'name': db_item['name'],
        'age': db_item['age'],
        'team': db_item['team']
    }

def playerListEntity(db_items) -> list:
    players_list = []
    for item in db_items:
        players_list.append(playerEntity(item))

    return players_list