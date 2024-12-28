import React from "react";
import Player from "./Player";

function PlayersList(props) {
    return (
        <div>
            <ul>
                {props.playersList.map(
                    (player, index) => {
                        return (<Player player={player} key={index}
                            
                            setPlayerId={props.setPlayerId}
                            setPlayerName={props.setPlayerName}
                            setPlayerAge={props.setPlayerAge}
                            setPlayerTeam={props.setPlayerTeam}
                            
                            />)
                    }
                )
                }
            </ul>
        </div>
    )

}

export default PlayersList;