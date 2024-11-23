import React from 'react';
import './Board.css';

const Board = ({ cards }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img
            src={card.image}
            alt={`Card ${card.id}`}
            className={`card-image ${card.flipped ? 'flipped' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
