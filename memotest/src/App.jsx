import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false); 
  const handleStartGame = () => {
    setGameStarted(true); 
  };

  return (
    <div className="app">
      <header className="Header">
        <h1>Memory Game</h1>
      </header>
      <main>
        {!gameStarted ? ( 
          <div className="startScreen">
            <h2>Bienvenido al Juego de Memoria!</h2>
            <div className="buttonStart">
            <button className="startButton" onClick={handleStartGame}>
              Empezá a jugar
            </button>
            </div>
          </div>
        ) : (
          <Cards /> 
        )}
      </main>
    </div>
  );
};

export default App;


