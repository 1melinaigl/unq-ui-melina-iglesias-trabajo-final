import React, { useState, useEffect } from 'react';
import arrow from '../../assets/images/arrow.svg';
import book from '../../assets/images/book.svg';
import wolf from '../../assets/images/wolf.svg';
import knight from '../../assets/images/knight.svg';

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);

  const images = [knight, arrow, book, wolf]; // paso las imagenes a un array
  const arrayImages = images.flatMap((item) => [item, item]); // esto me lo duplica

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffled = shuffleArray([...arrayImages]); // aca me lo shufflea
    setShuffledCards(
      shuffled.map((image, i) => ({
        id: i,
        image,
        flipped: false, 
      }))
    );
  }, []);

  return (
    <div className="cards">
      <h1>Memory Game</h1>
      <div className="cards-container">
        {shuffledCards.map((card) => (
          <img
            key={card.id}
            src={card.image} 
            alt={`Card ${card.id}`}
            className={`card ${card.flipped ? 'flipped' : ''}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
