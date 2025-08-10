import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import ProjectCard from './components/Projects/ProjectCard';
import Project from './components/Projects/Project';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import WorkSkills from './Group-Components/WorkSkills';
import AboutMe from './components/About/AboutMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Project/>
      {/* <Work/>
      <Skills/> */}
      <WorkSkills/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
