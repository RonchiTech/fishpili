import React from 'react';
import Card from '../UI/Card/Card';
import Fish from '../../assets/imgs/fish1.jpg'
import classes from './Shop.module.css'
const shop = () => {
  return (
    <div>
      <h2>Shop</h2>
      <div  className={classes.Shop}>
      <Card img={Fish} price='P100'/>
      <Card img={Fish} price='P300'/>
      <Card img={Fish} price='P1100'/>
      <Card img={Fish} price='P100'/>
      <Card img={Fish} price='P300'/>
      <Card img={Fish} price='P1100'/>
      <Card img={Fish} price='P100'/>
      <Card img={Fish} price='P300'/>
      <Card img={Fish} price='P1100'/>
      <Card img={Fish} price='P100'/>
      <Card img={Fish} price='P300'/>
      <Card img={Fish} price='P1100'/>
      </div>
    </div>
  );
};
export default shop;
