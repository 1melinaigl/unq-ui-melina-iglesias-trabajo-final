import './StartScreen.css';
import React from 'react';
import Button from '../Button/Button';
import PlayerInput from '../PlayerInput/PlayerInput';

const StartScreen = ({multiplayer, playerNames, boardSize, onModeSelection, onNameChange,onBoardSizeChange, onStartGame}) => {
  return (
    <div className="startScreen">
      <h1>Juego de Memoria</h1> 
      <h2>Bienvenido al MemoTest: GOT version</h2>
      <h3>Seleccioná el modo de juego:</h3>
      <div className="modeButtons">
        <Button text="1 Jugador" onClick={() => onModeSelection(false)} className={!multiplayer ? 'selected' : ''}/>
        <Button text="2 Jugadores" onClick={() => onModeSelection(true)} className={multiplayer ? 'selected' : ''}/>
      </div>

      {multiplayer && (
        <div className="nameInputs">
          <h3>Ingresá los nombres:</h3>
          <PlayerInput
            type="text"
            name="player1"
            placeholder="Nombre Jugador 1"
            value={playerNames.player1}
            onChange={onNameChange}
          />
          <PlayerInput
            type="text"
            name="player2"
            placeholder="Nombre Jugador 2"
            value={playerNames.player2}
            onChange={onNameChange}
          />
        </div>
      )}

      <h3>Seleccioná el tamaño del tablero:</h3>
      <div className="sizeButtons">
        <button 
          onClick={() => onBoardSizeChange(4)} className={boardSize === 4 ? 'selected' : ''}>
          4x4
        </button>
        <button 
          onClick={() => onBoardSizeChange(6)} className={boardSize === 6 ? 'selected' : ''}>
          6x6
        </button>
        <button 
          onClick={() => onBoardSizeChange(8)} className={boardSize === 8 ? 'selected' : ''}>
          8x8
        </button>
      </div>
      <Button text="Empezar Juego" onClick={onStartGame} />
    </div>
  );
};

export default StartScreen;
