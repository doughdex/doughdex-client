import React from 'react';
import brand from '../assets/img/brand-coming-soon.png';
import pizzaGuy from '../assets/img/pizza-guy.jpeg';

const ComingSoon = () => {

  return (
    <section className="landing">
    <div className="left-landing">
      <img src={brand} alt="logo" />
    </div>
    <div className="right-landing" style={{backgroundImage: `url(${pizzaGuy})`}}></div>
  </section>
  );
};

export default ComingSoon;