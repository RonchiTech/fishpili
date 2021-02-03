import React from 'react';
import Card from '../../UI/Card/Card';
import Fish1 from '../../../assets/imgs/fish1.jpg';
import Fish2 from '../../../assets/imgs/fish2.jpg'
import Fish3 from '../../../assets/imgs/fish3.jpg'
import Fish4 from '../../../assets/imgs/fish4.jpg'
import classes from './Cards.module.css'
const cards = () => {
  return (
    <div className={classes.Cards}>
      <Card img={Fish1} price="P100" name="Lapu-Lapu" />
      <Card img={Fish3} price="P300" name="Torotot" />
      <Card img={Fish2} price="P1100" name="Fish Malagket" />
      <Card img={Fish2} price="P100" name="Tunapunapu" />
      <Card img={Fish4} price="P300" name="Dalandan" />
      <Card img={Fish3} price="P2100" name="Lapu-Lapu" />
      <Card img={Fish3} price="P1300" name="Sikatuna" />
      <Card img={Fish1} price="P700" name="Lapu-Lapu" />
      <Card img={Fish2} price="P1100" name="Upawupaw" />
      <Card img={Fish1} price="P4500" name="Sprikitik" />
      <Card img={Fish4} price="P700" name="Sanskrit" />
      <Card img={Fish3} price="P1100" name="Lapu-Lapu" />
    </div>
  );
};
export default cards;