import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/home";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-[#1f242d] min-h-screen text-white">
      <Navbar />

      {!selectedProject && (
        <>
          <Home />
          <About />
          <Skills />
        </>
      )}

      <Projects
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      {!selectedProject && <Contact />}
    </div>
  );
}

export default App;
