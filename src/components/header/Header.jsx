import './header.css';

import React from 'react';

//import ME from '../../assets/me.png';
import ME from '../../assets/5.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id ='header'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Shubham Khapra</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className="header__me">
          <div className="me">
          <img src={ME} alt="Me" />
        </div>
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
