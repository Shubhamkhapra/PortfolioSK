import './About.css';

import React from 'react';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

//import ME from '../../assets/me-about.png';
import ME from '../../assets/4.png';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
          
          
         
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>80+ India </small>
            </article>
         
          
        
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            </div> 

          <p> Experience in investigating Cyber Crime Scene and Cyber Forensic Cases, System Data Analysis,
          Mobile Forensics, Digital forensic, Email Forensic,
          Malware Analysis, Log Analysis, Forensic report
          (Certificate under Section 65B).

          <br />
          <br />
          Web Application Developer with a passion for developing high quality web apps with great performance.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
