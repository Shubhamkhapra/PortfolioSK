import './contact.css';

import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import { MdOutlineMail } from 'react-icons/md';
import {
  RiMessengerLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8gamees', 'template_ifzjoon', form.current, '99GIQH030hqyrYWH72')
     e.target.rest();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container c__container">
        <div className="c__options">
          <article className="c_option">
            <MdOutlineMail className='c_option-icon' />
            <h4>Email</h4>
            <h5>khapra21@gmail.com</h5>
            <a href="mailto:hapra21@gmail.com" >Send a Message</a>
          </article>  
          
          <article className="c_option">
            <RiMessengerLine className=' c_option-icon'/>
            <h4>Messenger</h4>
            <h5>shubham khapra</h5>
            <a href="https://www.facebook.com/shubham.khapra.98" >Send a Message</a>
          </article>
          
          <article className="c_option">
            <RiWhatsappLine className='c_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918529675906</h5>
            <a href="https://wa.me/918529675906" >Send a Message</a>
          </article>

          </div>
          {/* end of contact options */}
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact
