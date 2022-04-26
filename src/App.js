import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectsList from './components/projectsList/ProjectsList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;
  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : 'white',
      color: darkMode && 'white',
    }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectsList />
      <Contact />

    </div>
  );
}

export default App;
