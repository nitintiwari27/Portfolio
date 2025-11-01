import { useState } from "react";
import { Menu, X } from "lucide-react";
import NTLogo from "../../assets/NTLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f242d] text-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold relative z-50">
          <span className="text-blue-500">
            <img src={NTLogo} alt="ntimg" className="h-20" />
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl z-50 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-[#121212] flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-400 transition"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-400 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
