import React from "react";
import axios from "axios";

function Player(props) {
    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/players/${playerId}`)
            .then(response => {
                alert('Jogador deletado com sucesso');
            })
    }

    const editPlayer = (player) => {
        props.setPlayerId(player.id);
        props.setPlayerName(player.name);
        props.setPlayerAge(player.age);
        props.setPlayerTeam(player.team);
    }



    return (
        <div>
            <p>
                <span className="fw-bold">
                    {props.player.name} - {props.player.age} - {props.player.team}
                </span>
                <button className="btn btn-sm" onClick={() => deletePlayer(props.player.id)}>
                    <span className="badge rounded-pill bg-danger">X</span>
                </button>
                <button className="btn btn-sm" onClick={() => editPlayer(props.player)}>
                    <span className="badge rounded-pill bg-warning">Editar</span>
                </button>
            </p>
        </div>

    )
}



export default Player;