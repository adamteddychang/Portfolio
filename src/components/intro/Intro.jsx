import React, { useContext } from 'react';
import './intro.css';
import Me from '../../img/me.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Linkedindk from '../../img/linkedin-color.png';
import Githubdk from '../../img/github-color.png';
import resumedk from '../../img/resumedk.png';
import resume from '../../img/resumel.png';
import { ThemeContext } from '../../context';

const Intro = () => {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name"> Adam Chang</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item" style={{ color: darkMode ? '#90ee90' : '#002e23' }}>React Developer</div>
              <div className="i-title-item" style={{ color: darkMode ? '#90ee90' : '#002e23' }}>Ruby on Rails Developer</div>
              <div className="i-title-item" style={{ color: darkMode ? '#90ee90' : '#002e23' }}>UI/UX Developer</div>
              <div className="i-title-item" style={{ color: darkMode ? '#90ee90' : '#002e23' }}>Microverse Mentor</div>

            </div>
          </div>
          <p className="i-desc">
            I am a Full-Stack Developer specializes in developing and
            creating web applications for all kinds of clients. I can create modern,
            stylish websites and applications that will be suitable for your needs.
          </p>
          <div className="social-icons">
            <div className="i-info-item">

              <a
                className="i-link"
                href="https://linkedin.com/in/adamteddychang"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && '#fff' }}
              >
                <img src={darkMode ? Linkedindk : Linkedin} alt="" className="i-icon" />
              </a>
            </div>
            <div className="i-info-item">

              <a
                className="i-link"
                href="https://github.com/adamteddychang"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && '#fff' }}
              >
                <img src={darkMode ? Githubdk : Github} alt="" className="i-icon" />
              </a>
            </div>
            <div className="i-info-item">

              <a
                className="i-link"
                href="https://drive.google.com/uc?export=download&id=1noqyEp1yN8PPTbGr3AXUQlkG1O3Km2SX"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && '#fff' }}
              >
                <img src={darkMode ? resumedk : resume} alt="" className="i-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg" />
        <img src={Me} alt="This is Adam" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
