import './App.css';
import About from './components/about/About';
import Contact from './components/contact/contact';
import Intro from './components/intro/Intro';
import ProjectsList from './components/projectsList/projectsList';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectsList />
      <Contact/>
    </div>
  );
}

export default App;
