import React from 'react';
import brand from '../assets/img/brand-coming-soon.png';

const ComingSoon = () => {

  return (
    <section className="landing">
    <div className="left-landing">
      <img src={brand} alt="logo" />
    </div>
    <div className="right-landing"></div>
  </section>
  );
};

export default ComingSoon;