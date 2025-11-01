import htmlImg from "../../assets/html.svg";
import cssImg from "../../assets/css.svg";
import jsImg from "../../assets/javascript.svg";
import reactImg from "../../assets/react.svg";
import tailwindImg from "../../assets/tailwindcss.svg";
import bootstrapImg from "../../assets/bootstrap.svg";
import reduxImg from "../../assets/redux.svg";
import nodeImg from "../../assets/nodejs.svg";
import mongoImg from "../../assets/mongodb.svg";
import expressImg from "../../assets/express.svg";
import gitImg from "../../assets/git.svg";
import postmanImg from "../../assets/postman.png";
import awsImg from "../../assets/aws.svg";

const skills = [
  { name: "HTML", src: htmlImg },
  { name: "CSS", src: cssImg },
  { name: "JavaScript", src: jsImg },
  { name: "React", src: reactImg },
  { name: "Tailwind CSS", src: tailwindImg },
  { name: "Bootstrap", src: bootstrapImg },
  { name: "Redux", src: reduxImg },
  { name: "Node.js", src: nodeImg },
  { name: "MongoDB", src: mongoImg },
  { name: "Express.js", src: expressImg },
  { name: "Git", src: gitImg },
  { name: "Postman", src: postmanImg },
  { name: "AWS", src: awsImg },
];

const Skills = () => (
  <section
    id="skills"
    className="bg-[#1f242d] scroll-mt-24 w-full py-10 flex flex-col items-center"
  >
    <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
      My Skills
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 md:grid-cols-6 gap-16">
      {skills.map(({ name, src }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center bg-transparent p-6 rounded-lg border-4 border-cyan-400"
          style={{ borderRadius: "0.75rem", boxShadow: "0 0 20px #04e76d30" }}
        >
          <img src={src} alt={name} className="w-20 h-20 object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
