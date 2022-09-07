import './footer.css';

import React from 'react';

import {
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterLine,
} from 'react-icons/ri';

export const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>SK</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/shubham.khapra.98"><RiFacebookLine /></a>
        <a href="https://www.linkedin.com/in/shubhamkhapra-/"><RiLinkedinLine /></a>
        <a href="https://twitter.com/Shubhamkhapra_"><RiTwitterLine /></a>
      </div>

      <div className="f_copyright">
        <small>&copy; Shubham Khapra. All Rights Reserved</small></div>
    </footer>
  )
}
