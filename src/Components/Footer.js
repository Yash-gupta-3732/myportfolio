import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-lg border-t border-white/10 text-white py-6 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/*Site name or logo */}
        <div className="text-lg font-semibold bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] bg-clip-text text-transparent">
          © {new Date().getFullYear()} Yash Gupta
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">About Me</Link>
          <Link to="/skill" className="hover:text-purple-400 transition-colors">Skills</Link>
          <Link to="/project" className="hover:text-purple-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Me</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Yash-gupta-3732"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-gupta-004499256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <SiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
