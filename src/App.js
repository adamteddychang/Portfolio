import './App.css';
import About from './components/about/About';
import Contact from './components/contact/contact';
import Intro from './components/intro/Intro';
import ProjectsList from './components/projectsList/projectsList';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProjectsList />
      <Contact />
      
    </div>
  );
}

export default App;
