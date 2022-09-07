import React from 'react';

import {
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shubhamkhapra-/" target="__blank"><BsLinkedin /></a>
        <a href="https://github.com/Shubhamkhapra" target="__blank"> <BsGithub /></a>
    </div>
  )
}

export default HeaderSocial