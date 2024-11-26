import React from 'react';
import './Board.css';
import gotIcon from '../../assets/images/got-icon.svg'

const Board = ({ cards, onCardClick }) => {
  return (
    <div className="board">
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
