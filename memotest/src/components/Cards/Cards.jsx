import './Cards.css';
import React, { useState, useEffect } from 'react';
import Board from '../Board/Board'; // Importamos Board
import arrow from '../../assets/images/arrow.svg';
import book from '../../assets/images/book.svg';
import wolf from '../../assets/images/wolf.svg';
import knight from '../../assets/images/knight.svg';
import shield from '../../assets/images/shield.svg';
import castle from '../../assets/images/castle.svg';
import dragon from '../../assets/images/dragon.svg';
import gotIcon from '../../assets/images/got-icon.svg';

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);

  const images = [knight, arrow, book, wolf, shield, castle, dragon, gotIcon]; 
  const arrayImages = images.flatMap((item) => [item, item]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffled = shuffleArray([...arrayImages]);
    setShuffledCards(
      shuffled.map((image, i) => ({
        id: i,
        image,
        flipped: false, 
      }))
    );
  }, []);

  return (
    <div className="container">
      <Board cards={shuffledCards} /> 
    </div>
  );
};

export default Cards;

