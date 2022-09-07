import './portfolio.css';

import React from 'react';

import third from '../../assets/1.png';
import one from '../../assets/2.png';
import two from '../../assets/3.png';

const data = [
  {
    id : 1,
    image: one,
    title: 'Wow Food Order',
    github: 'https://github.com/Shubhamkhapra/Foodorder.github.io'
  }, {
    id : 2,
    image: third,
    title: 'Email Header Analysis',
    github: 'https://github.com/Shubhamkhapra/Email_header_analysis_forensic'
  }, {
    id : 3,
    image: two,
    title: 'Data Recovery',
    github: 'https://github.com/Shubhamkhapra'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container p__container">

        {
          data.map(({id,image,title,github})=>{
            return (
              <article key={id} className="p__item">
              <div className="p__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             <div className="p__item-cta">
             <a href={github} target='_blank' className='btn btn-primary '>Github</a>
             </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio