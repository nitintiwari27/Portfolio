import nitin from "../../assets/nitin.png";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div
    id="about"
    className="w-full scroll-mt-24 bg-[#1f242d] py-16 px-4 flex flex-col items-center min-h-[80vh]"
  >
    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400 ">
      About
    </h2>
    <div className="flex flex-col md:flex-row mt-10 w-full max-w-5xl mx-auto items-center justify-center lg:gap-30 md:gap-10">
      <img
        className="hidden md:block rounded-full border-4 border-cyan-400 shadow-[0_0_20px_#00eeff70] h-72 w-72 object-cover"
        src={nitin}
        alt="About img"
      />

      <ul className="flex-1 flex flex-col gap-8">
        <li className="flex items-start gap-4">
          <ArrowRight size={32} className="mt-2 min-w-8 text-cyan-400" />
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-cyan-400 underline mb-2">
              Frontend developer
            </h3>
            <p className="text-base text-gray-200 leading-tight">
              I build fast, responsive websites that look great and work
              smoothly on any device. Using React and Tailwind CSS, I create
              simple, clean interfaces with cool animations and up-to-date
              features. My work in projects like Product Showcase Explorer shows
              my knack for turning ideas into slick, user-friendly
              experiences—always aiming for seamless interaction and easy
              navigation.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <ArrowRight size={32} className="mt-2 min-w-8 text-cyan-400" />
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-cyan-400 underline mb-2">
              Backend developer
            </h3>
            <p className="text-base text-gray-200 leading-tight">
              I develop secure and reliable server systems with Node.js,
              Express, and MongoDB. My focus is clean code behind the scenes:
              safe user logins, API connections, and powerful database setups.
              In projects like HomeBazaar and SaaS Notes, I’ve handled
              authentication, multi-user access, and tight data security—making
              sure everything runs smoothly and scales for real users.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
