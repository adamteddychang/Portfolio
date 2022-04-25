import Project from '../project/project';
import './projectsList.css';
import projects from '../../data';

const ProjectsList = () => (
  <div className="pl">
    <div className="pl-texts">

      <h1 className="pl-title">Create and Inspire</h1>
      <p className="pl-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quam accusantium enim a optio cum porro odio eius vel,
        totam et error itaque laudantium ullam aliquam eum facere cupiditate in iure.
      </p>

    </div>
    <div className="pl-list">
      {projects.map((proj) => (
        <Project key={proj.id} img={proj.img} link={proj.link} />

      ))}
    </div>
  </div>

);

export default ProjectsList;
