import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
const card = ({ img, price, name }) => {
  return (
    <Link style={{textDecoration: 'none', color: 'black'}}to={{
      pathname: `/product/${name}`,
      search: `?price=${price}`
    }} key={name + img + price}>
      <div className={classes.Card}>
        <img src={img} alt={name} />
        <div className={classes.FishInfo}>
          <h2>{name}</h2>
          <p style={{ fontSize: '1rem' }}>{price}</p>
        </div>
      </div>
    </Link>
  );
};
export default card;
