import './App.css';
import React, { useState } from 'react';
import Cards from './components/Cards/Cards';
import StartScreen from './components/StartScreen/StartScreen';
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

  const handleResetGame = () => {
    setGameStarted(false);
  };

  return (
    <div className="app">  
      <main>
        {!gameStarted ? (
          <StartScreen
            multiplayer={multiplayer}
            playerNames={playerNames}
            boardSize={boardSize}
            onModeSelection={handleModeSelection}
            onNameChange={handleNameChange}
            onBoardSizeChange={handleBoardSizeChange}
            onStartGame={handleStartGame}
          />
        ) : (
          <Cards 
            boardSize={boardSize}
            multiplayer={multiplayer}
            playerNames={playerNames}
            onReset={handleResetGame}
          />
        )}
      </main>
      <ToastContainer />
    </div>
  );
};

export default App;
