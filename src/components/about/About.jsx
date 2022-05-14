import './about.css';
import cat from '../../img/cat_laptop.jpg';

const About = () => (
  <div className="a">
    <div className="a-left">
      <div className="a-card bg" />
      <div className="a-card">
        <img src={cat} alt="" className="a-img" />
      </div>

    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        I am a Full-Stack Web Developer with a passion for creating and fixing applications.
      </p>
      <p className="a-desc">
        I am an enthusiatic Web Developer that specializes in React & Redux, Ruby on Rails,
        JavaScript, and HTML/CSS.
        <br />
        I have been working remotely with developers from across the globe,
        I have excellent communication skills and I have developed applications in a team.

      </p>
    </div>
  </div>
);

export default About;
