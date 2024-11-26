import './Cards.css';
import React, { useState, useEffect } from 'react';
import Board from '../Board/Board'; 
import arrow from '../../assets/images/arrow.svg';
import book from '../../assets/images/book.svg';
import wolf from '../../assets/images/wolf.svg';
import knight from '../../assets/images/knight.svg';
import shield from '../../assets/images/shield.svg';
import castle from '../../assets/images/castle.svg';
import dragon from '../../assets/images/dragon.svg';
import gotIcon from '../../assets/images/got-icon.svg';
import daenerys from '../../assets/images/daenerys.svg';
import jon from '../../assets/images/jon.svg';
import dragonIcon from '../../assets/images/dragonIcon.svg';
import chair from '../../assets/images/chair.svg';
import cersei from  '../../assets/images/cersei.svg'
import dog from '../../assets/images/dog.svg';
import knife from '../../assets/images/knife.svg'
import icefire from '../../assets/images/iceandfire.svg'
import weapon  from '../../assets/images/weapon.svg'
import fire from '../../assets/images/fire.svg'
import ice from '../../assets/images/ice.svg'


const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [match, setMatch] = useState(0);

  const images = [dog, cersei, daenerys, weapon, icefire, dragonIcon, jon, chair];
  const arrayImages = images.flatMap((item) => [item, item]); // aca lo pongo en array y a la vez las duplico

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

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;
    setFlippedCards((prev) => [...prev, id]);
    

    if (flippedCards.length === 1) {
      const firstCard = shuffledCards[flippedCards[0]];
      const secondCard = shuffledCards[id];
      if (firstCard.image === secondCard.image) {
        setMatchedCards((prev) => [...prev, flippedCards[0], id]);
        setMatch((prev) => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          
          setFlippedCards([]);
        }, 500);
      }
    }
  };

  return (
    <div className="container">
      <h2>Coincidencias: {match}</h2>
      <Board
        cards={shuffledCards.map((card) => ({
          ...card,
          flipped: flippedCards.includes(card.id) || matchedCards.includes(card.id),
        }))}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default Cards;
