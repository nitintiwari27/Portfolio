import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SaaSnotes from "../../assets/SaaSnotes.png";
import productShowcase from "../../assets/product-showcase.png";
import homebazaar from "../../assets/homebazaar.png";
import MYTask from "../../assets/MY-Task.png";
const Projects = ({ selectedProject, setSelectedProject }) => {
  const projects = [
    {
      id: 1,
      title: "SaaS Notes",
      img: SaaSnotes,
      liveDemo: "https://saas-notes-frontend-xi.vercel.app/",
      sourceCode: "https://github.com/nitintiwari27/SAAS-Application",
      overview: `SaaS Notes is a cloud-based note-taking platform I built using the MERN stack. It allows multiple organizations (tenants) to manage their own private workspaces with complete data isolation. Each tenant can have Admins and Members, with secure login and role-based access control.
Users can create, view, and delete notes, while admins manage member permissions. The app supports a free plan with limited notes and a Pro plan with unlimited notes. I implemented real-time subscription upgrades and built all backend APIs for note management, authentication, and tenant security.
The platform is fully deployed — backend on Render and frontend on Vercel — ensuring smooth, scalable, and secure performance.`,
      techStack: [
        "Frontend: React.js, Tailwind CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Authentication: JWT",
        "Deployment: Render, Vercel",
      ],
      features: [
        "Multi-tenant SaaS structure (separate data for each organization)",
        "JWT authentication with role-based access control",
        "Free and Pro plan system with real-time upgrades",
        "CRUD APIs for notes with strict tenant isolation",
        "Responsive and minimal UI",
      ],
    },
    {
      id: 2,
      title: "Product Showcase Explorer",
      img: productShowcase,
      liveDemo: "https://viewmyproducts.vercel.app/",
      sourceCode: "https://github.com/nitintiwari27/Product-Showcase-Explorer",
      overview: `Product Showcase Explorer is a modern e-commerce web app that lets users browse, search, and explore products interactively. It’s built with React, Redux Toolkit, and Tailwind CSS, using the DummyJSON API to fetch real-time product data.
The app includes category-based filtering, pagination, and a clean product detail page. I focused on smooth user experience — adding subtle Framer Motion animations and ensuring responsiveness across all devices.`,
      techStack: [
        "Frontend: React.js, Redux Toolkit, Tailwind CSS, Framer Motion",
        "API: DummyJSON",
        "Deployment: Vercel",
      ],
      features: [
        "Live product listing with category filtering and pagination",
        "Detailed product view with clean user interface",
        "State management using Redux Toolkit",
        "Framer Motion for interactive animations",
        "Fully responsive and mobile-friendly design",
      ],
    },
    {
      id: 3,
      title: "HomeBazaar",
      img: homebazaar,
      liveDemo: "https://homebazaar-n8us.onrender.com/",
      sourceCode: "https://github.com/nitintiwari27/HomeBazaar",
      overview: `HomeBazaar is a property-listing platform where users can buy, sell, or rent homes, apartments, and plots. I developed this full-stack application using Node.js, Express, MongoDB, and EJS.
Users can register, securely log in, and post properties with images and details. The app includes advanced search and filtering options by type, location, and price. I integrated LocationIQ to display map views for each property, helping users visualize exact locations.
Visitors can also rate and review properties to assist others in making better decisions.`,
      techStack: [
        "Frontend: EJS, Bootstrap",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Mapping: LocationIQ",
        "Deployment: Render",
      ],
      features: [
        "User authentication and  property posting",
        "Advanced search and filtering by price, type, and location",
        "Integrated map view for each property listing",
        "Ratings and reviews system",
        "Responsive design for various devices",
      ],
    },
    {
      id: 4,
      title: "Voice Enabled To-Do List",
      img: MYTask,
      liveDemo: "https://task-list-ebon-iota.vercel.app/",
      sourceCode: "https://github.com/nitintiwari27/Task-list",
      overview: `Voice Enabled To-Do List is a productivity web application that allows users to manage their daily tasks effortlessly using both text and voice input. Built with HTML, CSS, JavaScript, Bootstrap, and the Web Speech API, it enables users to add, edit, and delete tasks through simple speech commands.
The app provides a clean and responsive UI with CRUD functionality, ensuring tasks are stored locally for persistence. Users can easily mark completed tasks, search existing ones, and use the voice recognition feature to enhance accessibility and convenience.`,
      techStack: [
        "Frontend: HTML, CSS, Bootstrap, JavaScript",
        "Voice Recognition: Web Speech API",
        "Storage: Local Storage",
        "Deployment: Vercel",
      ],
      features: [
        "Add, edit, and delete tasks using voice or text input",
        "Integrated Web Speech API for voice recognition",
        "Search and filter tasks efficiently",
        "Persistent task data using local storage",
        "Fully responsive and user-friendly interface",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#1f242d] scroll-mt-24 text-white min-h-screen py-10 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        My Projects
      </h2>

      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
          allProjects={projects}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
