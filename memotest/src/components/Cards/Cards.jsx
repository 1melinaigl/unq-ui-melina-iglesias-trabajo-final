import './Cards.css';
import React, { useState, useEffect } from 'react';
import Board from '../Board/Board'; 
import arrow from '../../assets/images/arrow.svg';
import book from '../../assets/images/bookg.svg';
import wolf from '../../assets/images/wolf.svg';
import knight from '../../assets/images/knight.svg';
import shield from '../../assets/images/shieldg.svg';
import castle from '../../assets/images/castleg.svg';
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
import weapon  from '../../assets/images/weapon.svg';
import fire from '../../assets/images/fire.svg';
import ice from '../../assets/images/ice.svg';
import targaryen from '../../assets/images/targaryen.png';
import greyjoy from '../../assets/images/greyjoy.png';
import baratheon from '../../assets/images/baratheon.png'
import stark from '../../assets/images/stark.png';
import arryn from '../../assets/images/arryn.png';
import martell from '../../assets/images/martell.png';
import tyrell from '../../assets/images/tyrell.png';
import tully from '../../assets/images/tully.png';
import moon from '../../assets/images/gotMoonAn.svg';
import gema from '../../assets/images/gema.png';
import tyrion from '../../assets/images/tyrion-lannister.svg';
import raven from '../../assets/images/raven.svg';
import ship from '../../assets/images/ship.svg';
import coup from '../../assets/images/coup.svg';
import paper from '../../assets/images/paper.svg';
import crown from '../../assets/images/crown.svg';
import money from '../../assets/images/money.svg';
import Button from '../Button/Button';



const Cards = ({ boardSize, multiplayer, playerNames}) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  const images = [dog, cersei, daenerys, weapon, icefire, dragonIcon, jon, chair, fire, ice, knife, castle, arrow, 
                  arryn, shield, stark, dragon, targaryen, greyjoy, baratheon, martell, tyrell, tully, book, moon, gema, tyrion, raven, ship, coup, paper, crown, money];
  const arrayImages = images.slice(0, (boardSize * boardSize) / 2).flatMap((item) => [item, item]); // aca los los esta cortando según el tamaño del tablero q le doy y los duplica 

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  const resetGame = () => {
    const shuffled = shuffleArray([...arrayImages]);
    setShuffledCards(
      shuffled.map((image, i) => ({
        id: i,
        image,
        flipped: false,
      }))
    );
    setFlippedCards([]);
    setMatchedCards([]);
    setGameWon(false);
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
  };

  useEffect(() => {
    resetGame(); 
  }, [boardSize]);



  useEffect(() => {
    if (matchedCards.length === shuffledCards.length && shuffledCards.length > 0) {
      setGameWon(true);
    }
  }, [matchedCards]);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    setFlippedCards((prev) => [...prev, id]);

    if (flippedCards.length === 1) {
      const firstCard = shuffledCards[flippedCards[0]];
      const secondCard = shuffledCards[id];

      if (firstCard.image === secondCard.image) {
        setMatchedCards((prev) => [...prev, flippedCards[0], id]);
        if (multiplayer) {
          setScores((prev) => ({
            ...prev,
            [`player${currentPlayer}`]: prev[`player${currentPlayer}`] + 1,
          }));
        }
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          if (multiplayer) {
            setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
          }
        }, 500);
      }
    }
  };

  return (
    <div className="container">
      {multiplayer && !gameWon && (
        <h2>Turno de {currentPlayer === 1 ? playerNames.player1 : playerNames.player2}</h2>
      )}
      {multiplayer && (
        <div className="scores">
          <h3>{playerNames.player1}: {scores.player1} puntos</h3>
          <h3>{playerNames.player2}: {scores.player2} puntos</h3>
        </div>
      )}
      {!gameWon ? (
        <Board
          cards={shuffledCards.map((card) => ({
            ...card,
            flipped: flippedCards.includes(card.id) || matchedCards.includes(card.id),
          }))}
          onCardClick={handleCardClick}
          boardSize={boardSize}
        />
      ) : (
        <div className="resultsMessage">
          <h2>
            {multiplayer
              ? scores.player1 > scores.player2
                ? `¡${playerNames.player1} gana! El trono es tuyo. 🎉`
                : scores.player2 > scores.player1
                ? `¡${playerNames.player2} gana! El trono es tuyo. 🎉`
                : '¡Es un empate!'
              : '¡Ganaste! 🎉'}
          </h2>
          <div className="buttonOption">
            <Button text="Reiniciar Juego" onClick={resetGame} />
            <Button text="Volver al Inicio" onClick={() => window.location.reload()} />
          </div>
        </div>
      )}
       <div className="buttonBack">
      <Button text="Volver al Inicio" onClick={() => window.location.reload()}/>
      </div>
    </div>
  );
};
export default Cards;