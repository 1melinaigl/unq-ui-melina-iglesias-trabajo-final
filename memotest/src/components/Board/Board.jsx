import './Board.css';
import React from 'react';
import gotIcon from '../../assets/images/got-icon.svg';

const Board = ({ cards, onCardClick, boardSize }) => {
  const boardClass = `board board--${boardSize}x${boardSize}`; 

  return (
    <div className={boardClass}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${card.flipped ? 'flipped' : ''}`}
          onClick={() => onCardClick(card.id)}
        >
          <img
            src={card.flipped ? card.image : gotIcon}
            alt={`Card ${card.id}`}
            className="card-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Board;

