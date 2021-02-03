import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
const card = ({ img, price, name }) => {
  return (
    <Link to={{
      pathname: `/product/${name}`,
      search: `?price=${price}`
    }}>
      <div className={classes.Card}>
        <img src={img} alt="Fish" />
        <div className={classes.FishInfo}>
          <h2>{name}</h2>
          <p style={{ fontSize: '1rem' }}>{price}</p>
        </div>
      </div>
    </Link>
  );
};
export default card;
