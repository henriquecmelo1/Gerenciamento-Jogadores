import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList.js';


function App() {
  const [playersList, setPlayersList] = useState([{}]);
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState('');
  const [playerTeam, setPlayerTeam] = useState('');
  const [playerId, setPlayerId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/players')
      .then(response => {
        console.log(response.data);
        setPlayersList(response.data);
      }).catch(
        (error) => { console.log(error) }
      )
  });

  const addPlayer = () => {
    const newPlayer = {
      'name': playerName,
      'age': playerAge,
      'team': playerTeam
    }

    axios.post('http://localhost:8000/players', newPlayer)
      .then(response => {
        alert("Jogador Criado");
      }).catch(
        (error) => { console.log(error) }
      )
    setPlayerId('');
  };

  const editPlayer = (playerId) => {
    const newPlayer = {
      'name': playerName,
      'age': playerAge,
      'team': playerTeam
    }
    axios.put(`http://localhost:8000/players/${playerId}`, newPlayer)
      .then(response => {
        alert('Jogador editado com sucesso');
      }).catch(
        (error) => { console.log(error) }
      )
    setPlayerId('');
  };

  return (
    <div className='container'>
      <div
        className='mt-3 justify-content-center align-items-center mx-auto'
        style={{ width: '70vw', backgroundColor: '#ffffff' }}
      >

        <h2 className='text-center text-white bg-success card mb-1'>Gerenciamento de Jogadores</h2>
        <h6 className='text-center text-white bg-success card mb-2'>Informações dos Jogadores</h6>
        <div className='card-body text-center'>
          <h5 className='card text-center text-white bg-dark mb-2'>Cadastro do Jogador</h5>
          <span className='card-text'>

            <input className='mb-1 form-control' placeholder='Nome do Jogador'
              onChange={event => setPlayerName(event.target.value)}
              value={playerName} />

            <input className='mb-1 form-control' placeholder='Idade do Jogador'
              onChange={event => setPlayerAge(event.target.value)}
              value={playerAge} />

            <input className='mb-2 form-control' placeholder='Time do Jogador'
              onChange={event => setPlayerTeam(event.target.value)}
              value={playerTeam} />

            <button className='btn btn-outline-success mb-3 col-2 me-2' onClick={addPlayer}
            disabled={playerId !== ''}>Cadastrar</button>

            <button className='btn btn-outline-warning mb-3 col-2' disabled={playerId === ''}
            onClick={() => editPlayer(playerId)}>Editar</button>
          </span>
          <h5 className='card text-center text-white bg-dark mb-2'>Lista de Jogadores</h5>
          <div>
            <PlayersList playersList={playersList}

              setPlayerId={setPlayerId}
              setPlayerName={setPlayerName}
              setPlayerAge={setPlayerAge}
              setPlayerTeam={setPlayerTeam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
