import React from 'react'
import logoGot from '../../assets/images/got-icon.svg';
import arrow from '../../assets/images/arrow.svg';
import book from '../../assets/images/book.svg';
import wolf from '../../assets/images/wolf.svg';

const Cards = () => {

const images = [logoGot, arrow, book, wolf];

const arrayImages = images.flatMap(item => [item, item]);

console.log(arrayImages); 

return (

    <h1> a</h1>
);


}

export default Cards;