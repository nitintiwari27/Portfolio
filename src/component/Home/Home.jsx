import nitin from "../../assets/nitin.png";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaCode, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white scroll-mt-24 bg-[#1f242d] flex flex-col lg:flex-row w-full h-full justify-between items-center mt-20 px-6 py-16 md:px-20"
    >
      <div className="w-full lg:w-1/2 px-14 text-center lg:text-left flex flex-col items-center lg:items-start justify-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
          Hello,
          <h2>I'm Nitin Tiwari</h2>
        </h1>
        <h2 className="text-4xl text-cyan-400 font-semibold">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
          />
        </h2>
        <br />
        <p className="text-base sm:text-lg md:text-2xl tracking-tight">
          Crafting innovative solutions through code,
          <br />
          one project at a time.
        </p>

        <a
          href="https://drive.google.com/file/d/1dK4BRas1wokOM4xa6IQiGRqU6gIlovqX/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mt-6 mb-6 items-center justify-center w-50 h-15 rounded-3xl border-2 border-cyan-400
             text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-[#1f242d] transition-colors duration-300
             shadow-[0_0_12px_#00eeff] focus:outline-none"
        >
          CV
        </a>

        <div className="flex space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/nitintiwari27/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400
             text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-[#1f242d] transition-colors duration-300
             shadow-[0_0_12px_#00eeff]"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/nitintiwari27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400
             text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-[#1f242d] transition-colors duration-300
             shadow-[0_0_12px_#00eeff]"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://leetcode.com/u/nitintiwari27/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400
             text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-[#1f242d] transition-colors duration-300
             shadow-[0_0_12px_#00eeff]"
          >
            <FaCode size={30} />
          </a>
          <a
            href="https://www.instagram.com/nitintiwari8810/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400
             text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-[#1f242d] transition-colors duration-300
             shadow-[0_0_12px_#00eeff]"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-1/2">
        <img
          className="h-72 w-72 mt-10 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 
               object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_20px_#00eeff70]"
          src={nitin}
          alt="Nitin Tiwari"
        />
      </div>
    </div>
  );
};

export default Home;
