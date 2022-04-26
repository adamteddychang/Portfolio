import './project.css';
import PropTypes from 'prop-types';

const Project = ({ img, link }) => (
  <div className="p">
    <div className="p-browser">
      <div className="p-circle" />
      <div className="p-circle" />
      <div className="p-circle" />
    </div>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt="" className="p-img" />
    </a>
  </div>
);

Project.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Project;
