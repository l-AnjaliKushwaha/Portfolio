import Navbar from './Components/Navbar/Navbar.jsx';
import Intro from './Components/Intro/Intro.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Experince from './Components/Experince/Experince.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Project.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { themeContext } from '../Context.jsx';
import './index.css';
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Experince></Experince>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
