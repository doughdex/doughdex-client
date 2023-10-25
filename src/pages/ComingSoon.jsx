import React from 'react';
import brand from '../assets/img/brand.png';

const ComingSoon = () => {

  const logoPath = '../assets/img/logo.png';

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