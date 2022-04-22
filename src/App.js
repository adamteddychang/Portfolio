import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProjectsList from './components/projectsList/projectsList';

function App() {
  return (
    <div >
      <Intro/>
      <About/>
      <ProjectsList/>
    </div>
  );
}

export default App;
