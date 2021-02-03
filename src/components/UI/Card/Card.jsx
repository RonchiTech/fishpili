import React from 'react';
import classes from './Card.module.css';

const card = ({ img,price,name }) => {
  return (
    <div className={classes.Card}>
      <img src={img} alt="Fish" />
      <div className={classes.FishInfo}>
      <h2>{name}</h2>
      <p style={{fontSize: '1rem'}}>{price}</p>
      </div>
      
    </div>
  );
};
export default card;
