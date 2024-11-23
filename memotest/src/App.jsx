import './App.css'
import React from 'react'
import logoGot from './assets/images/got-icon.svg';
import arrow from './assets/images/arrow.svg';
import book from './assets/images/book.svg';
import wolf from './assets/images/wolf.svg';

const App = () => {

  const images = [logoGot, arrow, book, wolf];

  const arrayImages = images.flatMap(item => [item, item]);

  console.log(arrayImages); 

  return (
    <div>
      <h1>Memory Game</h1>
      <p>¡Diviértete jugando con las imágenes!</p>
    </div>
  );
}

export default App;

