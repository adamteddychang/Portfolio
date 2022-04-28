import React, { useRef, useState, useContext } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Linkedindk from '../../img/linkedin-color.png';
import Phonedk from '../../img/phone-color.png';
import Emaildk from '../../img/mail-color.png';
import Githubdk from '../../img/github-color.png';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_phnpycf',
        'template_j7o83sg',
        formRef.current, 'jNwdS0SuM-9tJWydx')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
    const inputs = document.querySelectorAll('input,textarea');
    console.log(inputs);
    // eslint-disable-next-line
    inputs.forEach((i) => {
      i.value = '';
    });
  };

  return (
    <div className="c">
      <div className="c-bg">.</div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Contact me!
          </h1>
          <div className="c-info">
            <div className="c-info-item">

              <img src={darkMode ? Linkedindk : Linkedin} alt="" className="c-icon" />
              <a className="c-link" href="https://linkedin.com/in/adamteddychang" target="_blank" rel="noreferrer" style={{ color: darkMode && '#fff' }}>adamteddychang</a>
            </div>
            <div className="c-info-item">
              <img src={darkMode ? Phonedk : Phone} alt="" className="c-icon" />
              <a className="c-link" href="tel:+36302109114" style={{ color: darkMode && '#fff' }}>+3630-210-9114</a>
            </div>
            <div className="c-info-item">
              <img src={darkMode ? Emaildk : Email} alt="" className="c-icon" />
              <a
                href="mailto:adamchang0725@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && '#fff' }}
                className="c-link"
              >
                adamchang0725@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img src={darkMode ? Githubdk : Github} alt="" className="c-icon" />
              <a
                className="c-link"
                href="https://github.com/adamteddychang"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && '#fff' }}
              >
                @adamteddychang
              </a>
            </div>
          </div>

        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Interested in my skills?</b>
            <br />
            Fill out the contact form and I will get back in touch!
            <br />
            Alternatively, feel free to contact me via the links on the left.

          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && '#333', color: darkMode && '#fff' }} type="text" placeholder="Name" name="user_name" className={darkMode ? 'inp-d' : 'inp-l'} />
            <input style={{ backgroundColor: darkMode && '#333', color: darkMode && '#fff' }} type="text" placeholder="Subject" name="user_subject" className={darkMode ? 'inp-d' : 'inp-l'} />

            <input style={{ backgroundColor: darkMode && '#333', color: darkMode && '#fff' }} type="text" placeholder="Email" name="user_email" id="inp-email" className={darkMode ? 'inp-d' : 'inp-l'} />
            <textarea style={{ backgroundColor: darkMode && '#333', color: darkMode && '#fff' }} rows="7" placeholder="Message" name="message" className={darkMode ? 'inp-d' : 'inp-l'} />
            <button type="submit">Submit</button>
            <p className="c-message">{done && 'Thank you for your email, I will reach out within 48 hours.'}</p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
