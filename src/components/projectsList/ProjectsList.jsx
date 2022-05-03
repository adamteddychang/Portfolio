import Project from '../project/Project';
import './projectsList.css';
import projects from '../../data';

const ProjectsList = () => (
  <div className="pl">
    <div className="pl-texts">

      <h1 className="pl-title">Check out my work!</h1>
      <p className="pl-desc">
        Feel free to click on my projects to check them out!
      </p>

    </div>
    <div className="pl-list">
      {projects.map((proj) => (
        <Project
          key={proj.id}
          img={proj.img}
          link={proj.link}
          title={proj.title}
          desc={proj.description}
          lang={proj.lang}
          repo={proj.repo}
        />

      ))}
    </div>
  </div>

);

export default ProjectsList;
