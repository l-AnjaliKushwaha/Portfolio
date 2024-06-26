import Navbar from './Components/Navbar/Navbar.jsx';
import Intro from './Components/Intro/Intro.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Experince from './Components/Experince/Experince.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Project.jsx';
import Contact from './Components/Contact/Contact.jsx'
import './index.css';


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Experince></Experince>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
