import React from 'react';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experince';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Services';

// import Testimonials from './components/testimonials/Testimonials';

const APP = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
  {/*<Testimonials /> */}
      <Contact />
      <Footer />

    </>

  )
}

export default APP