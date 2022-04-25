import './about.css';

const About = () => (
  <div className="a">
    <div className="a-left">
      <div className="a-card bg" />
      <div className="a-card">
        <img src="https://www.fairobserver.com/wp-content/uploads/2021/09/remote-work.jpg" alt="" className="a-img" />
      </div>

    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        I am a Web Developer with a passion for writing and creating.

      </p>
      <p className="a-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias iste tempore odit quos minus consequuntur quasi,
        blanditiis repudiandae totam corrupti eos distinctio eveniet!
        Quam, error maiores aliquam quibusdam sequi cupiditate!
      </p>
    </div>
  </div>
);

export default About;
