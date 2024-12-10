import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Button from './components/Button/Button';
import PlayerInput from './components/PlayerInput/PlayerInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(4); 
  const [multiplayer, setMultiplayer] = useState(false);
  const [playerNames, setPlayerNames] = useState({ player1: '', player2: '' }); 

  const handleStartGame = () => {
    if (multiplayer && (!playerNames.player1 || !playerNames.player2)) {
      toast.error('Ingrese los nombres de los jugadores.', {
        position: 'top-center', 
        autoClose: 2000,       
      });
      return;
    }
    setGameStarted(true);
  };

  const handleModeSelection = (isMultiplayer) => {
    setMultiplayer(isMultiplayer);
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setPlayerNames((prev) => ({ ...prev, [name]: value }));
  };

  const handleBoardSizeChange = (size) => {
    setBoardSize(size); 
  };

  return (
    <div className="app">  
      <main>
        {!gameStarted ? (
          <div className="startScreen">
            <h1>Juego de Memoria</h1> 
            <h2>Bienvenido al MemoTest: GOT version</h2>
            <h3>Seleccioná el modo de juego:</h3>
            <div className="modeButtons">
              <Button text= "1 Jugador" onClick={() => handleModeSelection(false)} className={!multiplayer ? 'selected' : ''}/>
              <Button text= "2 Jugadores" onClick={() => handleModeSelection(true)} className={multiplayer ? 'selected' : ''}/>
                
            </div>

            {multiplayer && (
              <div className="nameInputs">
                <h3>Ingresá los nombres:</h3>
                <PlayerInput
                  type="text"
                  name="player1"
                  placeholder="Nombre Jugador 1"
                  value={playerNames.player1}
                  onChange={handleNameChange}
                />
                <PlayerInput
                  type="text"
                  name="player2"
                  placeholder="Nombre Jugador 2"
                  value={playerNames.player2}
                  onChange={handleNameChange}
                />
              </div>
            )}

            <h3>Seleccioná el tamaño del tablero:</h3>
            <div className="sizeButtons">
              <button onClick={() => handleBoardSizeChange(4)} className={boardSize === 4 ? 'selected' : ''}>
                4x4
              </button>
              <button onClick={() => handleBoardSizeChange(6)} className={boardSize === 6 ? 'selected' : ''}>
                6x6
              </button>
              <button onClick={() => handleBoardSizeChange(8)} className={boardSize === 8 ? 'selected' : ''}>
                8x8
              </button>
            </div>
            <Button text="Empezar Juego" onClick={handleStartGame}  multiplayer={multiplayer} playerNames={playerNames} />
          </div>
        ) : (
          <Cards boardSize={boardSize} multiplayer={multiplayer} playerNames={playerNames}/> 
        )}
      </main>
      <ToastContainer/>
    </div>
  );
};

export default App;


