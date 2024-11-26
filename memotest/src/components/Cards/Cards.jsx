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

  const images = [dog, cersei, daenerys, weapon, icefire, dragonIcon, jon, chair]; 
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

