import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import Home from './Components/Home';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "linear-gradient(45deg, #ff00b4, #6a00ff)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 0 20px rgba(106,0,255,0.5)",
          },
          success: {
            iconTheme: {
              primary: "#00ffcc",
              secondary: "#1a0b2e",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff4444",
              secondary: "#1a0b2e",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
