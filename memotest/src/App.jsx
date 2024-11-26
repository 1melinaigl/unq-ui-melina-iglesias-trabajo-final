import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(4); 

  const handleStartGame = () => {
    setGameStarted(true); 
  };

  const handleBoardSizeChange = (size) => {
    setBoardSize(size); 
  };

  return (
    <div className="app">
      <header className="Header">
        <h1>Juego de Memoria</h1>
      </header>
      <main>
        {!gameStarted ? (
          <div className="startScreen">
            <h2>Bienvenido al Juego de Memoria</h2>
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
            <button className="startButton" onClick={handleStartGame}>
              Empezar Juego
            </button>
          </div>
        ) : (
          <Cards boardSize={boardSize} /> 
        )}
      </main>
    </div>
  );
};

export default App;


