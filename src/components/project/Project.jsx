import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

import './project.css';

const Project = ({
  img, link, title, desc, lang, repo,
}) => {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" />
        <div className="p-circle" />
        <div className="p-circle" />

      </div>

      <div className="p-text">
        <div className="p-t-t">
          <h2>{title}</h2>
          <p>{desc}</p>
          <p>
            Built with:
            {lang}
          </p>
        </div>
        <a id={darkMode ? 'repo-link' : 'repo-light'} href={repo} target="_blank" rel="noreferrer">        Gihub Repo</a>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>

    </div>
  );
};

Project.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Project;
