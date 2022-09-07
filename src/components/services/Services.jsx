import './services.css';

import React from 'react';

import { BsCheck } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </li>
            <h5>Languages I speak:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>HTML,CSS,BootStrap</p>
            </li>
            <h5>Dev Tools:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>Vscode</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Github</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Terminal</p>
            </li>
          </ul>
        </article>

        {/*End Front end */}


        <article className="service">
          <div className="service__head">
            <h3>Full Stack Web Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
            </li>
            <h5>Languages I speak:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>HTML,CSS,BootStrap,React,  Php, Python</p>
            </li>
            <h5>Dev Tools:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>Vscode</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Github</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Terminal</p>
            </li>
          </ul>
        </article>

        {/*End full stack */}

        <article className="service">
          <div className="service__head">
            <h3>Cyber Forensic</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Cybercrime is on the rise across India .</p>
            </li>
            <h5> Investigations of all types:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>
                Forensic Data Recovery.</p>
            </li>
            <li><BsCheck className='service__list-icon' />
            <p>
             Digital Evidence Capture From Mobile Phones.
            </p></li>
            <h5>Forensic Tools:</h5>
            <li><BsCheck className='service__list-icon' />
              <p>Cellebrite</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Magnet Forensics</p>
            </li>
            <li><BsCheck className='service__list-icon' />
              <p>Oxygen Forensics</p>
            </li>
          </ul>
        </article>
        {/*End cyber*/}
      </div>
    </section>
  )
}

export default Services
