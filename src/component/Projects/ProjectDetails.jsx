import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetails = ({
  project,
  onBack,
  allProjects,
  setSelectedProject,
}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount =
        direction === "left" ? -containerWidth : containerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <button
          onClick={onBack}
          className="mb-6 bg-cyan-400 text-[#1f242d] px-4 py-2 rounded-lg font-semibold hover:opacity-80"
        >
          ← Back to Projects
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="rounded-xl mb-6 w-full object-cover"
        />

        <h3 className="text-3xl font-bold text-cyan-400 mb-4">
          {project.title}
        </h3>

        <h4 className="text-2xl font-semibold mb-2">Overview</h4>
        <p className="text-gray-300 mb-6">{project.overview}</p>

        <h4 className="text-2xl font-semibold mb-2">Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h4 className="text-2xl font-semibold mb-2">Features</h4>
        <ul className="list-disc list-inside text-gray-300 mb-10">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="lg:hidden mb-10 border-t border-cyan-400 pt-6">
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h4>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cyan-400 text-[#1f242d] text-center py-2 rounded-lg mb-3 font-semibold hover:opacity-80"
          >
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cyan-400 text-[#1f242d] text-center py-2 rounded-lg font-semibold hover:opacity-80"
          >
            Source Code
          </a>
        </div>

        <h4 className="text-2xl font-bold mt-10 mb-4 text-cyan-400">
          Other Projects
        </h4>

        <div className="relative w-full overflow-hidden">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-400 text-[#1f242d] rounded-full p-2 hover:opacity-80 z-10"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 scroll-smooth hide-scrollbar px-10 pb-4"
            style={{
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allProjects
              .filter((p) => p.id !== project.id)
              .map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="cursor-pointer border-2 border-cyan-400 rounded-xl p-4 shrink-0 hover:bg-cyan-400 hover:text-[#1f242d] transition-all scroll-snap-align-start"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-lg mb-3 w-full h-56 object-cover"
                  />
                  <h5 className="text-lg font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {p.title}
                  </h5>
                </div>
              ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-400 text-[#1f242d] rounded-full p-2 hover:opacity-80 z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="hidden lg:block lg:w-64 shrink-0 sticky top-24 self-start bg-[#1f242d] border-l-2 border-cyan-400 p-4 rounded-lg h-fit">
        <h4 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h4>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-cyan-400 text-[#1f242d] text-center py-2 rounded-lg mb-3 font-semibold hover:opacity-80"
        >
          Live Demo
        </a>
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-cyan-400 text-[#1f242d] text-center py-2 rounded-lg font-semibold hover:opacity-80"
        >
          Source Code
        </a>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @media (min-width: 1024px) {
            /* Desktop - 2 cards visible */
            .hide-scrollbar > div {
              min-width: 48% !important;
              max-width: 48% !important;
              height: 320px;
            }
          }

          @media (max-width: 768px) {
            /* Mobile - 1 card visible */
            .hide-scrollbar > div {
              min-width: 90% !important;
              max-width: 90% !important;
              height: 320px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectDetails;
