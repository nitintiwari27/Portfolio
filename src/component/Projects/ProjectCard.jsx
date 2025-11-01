const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border-2 border-cyan-400 p-6 rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-[#1f242d] shadow-lg hover:shadow-cyan-400/50"
    >
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl mb-4 w-full h-60 object-cover"
      />
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-2">{project.overview.slice(0, 100)}...</p>
    </div>
  );
};

export default ProjectCard;
