import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
