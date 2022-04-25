import './intro.css';
import Me from '../../img/IMG_1216-removebg.png';

const Intro = () => (
  <div className="intro">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name"> Adam Chang</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Full-Stack Developer</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Web Developer</div>
          </div>
        </div>
        <p className="i-desc">
          I am a Full-Stack Developer specializes in developing and
          creating web applications for all kinds of clients. I can create modern,
          stylish website and application that will be suitable for your needs.

        </p>
      </div>
    </div>
    <div className="i-right">
      <div className="i-bg" />
      <img src={Me} alt="This is Adam" className="i-img" />
    </div>
  </div>
);

export default Intro;
