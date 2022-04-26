import React, { useRef } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c">
      <div className="c-bg">.</div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Let&apos;s discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">

              <img src={Linkedin} alt="" className="c-icon" />
              <a href="linkedin.com/in/adamteddychang">adamteddychang</a>
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +3630-210-9114
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              adamchang0725@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Github} alt="" className="c-icon" />
              <a href="github.com/adamteddychang">@adamteddychang</a>
            </div>
          </div>

        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What&apos;s your story?</b>
            Get in touch! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
            Dignissimos, saepe natus eum animi deserunt quaerat esse dicta veritatis
            repellendus eligendi.
            Hic, a. Iste mollitia sunt deserunt ex non culpa numquam.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />

            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
