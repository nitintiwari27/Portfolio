import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const lastSubmit = localStorage.getItem("lastSubmitTime");
    if (lastSubmit) {
      const now = Date.now();
      const diff = now - parseInt(lastSubmit, 10);
      const remaining = 24 * 60 * 60 * 1000 - diff;
      if (remaining > 0) {
        setIsDisabled(true);
        updateTimeLeft(remaining);
        startCountdown(remaining);
      }
    }
  }, []);

  const startCountdown = (remaining) => {
    const interval = setInterval(() => {
      const newRemaining = remaining - 1000;
      if (newRemaining <= 0) {
        clearInterval(interval);
        setIsDisabled(false);
        setTimeLeft("");
        localStorage.removeItem("lastSubmitTime");
      } else {
        updateTimeLeft(newRemaining);
        remaining = newRemaining;
      }
    }, 1000);
  };

  const updateTimeLeft = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
  };

  const handleSubmit = (e) => {
    if (isDisabled) {
      e.preventDefault();
      alert("You can send the next message after 24 hours!");
      return;
    }

    localStorage.setItem("lastSubmitTime", Date.now().toString());
    setIsDisabled(true);
    startCountdown(24 * 60 * 60 * 1000);
  };

  return (
    <section
      id="contact"
      className="bg-[#1f242d] scroll-mt-24 text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        Connect with Me
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#1f242d] rounded-2xl shadow-lg border border-cyan-400 p-8 md:p-10 gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Let’s Make Something Great Together
          </h3>
          <p className="text-gray-300 mb-6">
            Reach out through my social platforms or drop a message below. I’m
            always excited to collaborate on new and creative projects!
          </p>

          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/nitintiwari27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-3xl hover:text-[#1f242d] hover:bg-cyan-400 border-2 border-cyan-400 p-3 rounded-full transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nitintiwari27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-3xl hover:text-[#1f242d] hover:bg-cyan-400 border-2 border-cyan-400 p-3 rounded-full transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-3xl hover:text-[#1f242d] hover:bg-cyan-400 border-2 border-cyan-400 p-3 rounded-full transition-all"
            >
              <FaYoutube />
            </a>
          </div>

          {isDisabled && (
            <p className="mt-6 text-yellow-400 font-medium">
              ⏳ You can submit again after: {timeLeft}
            </p>
          )}
        </div>

        <div className="flex-1 bg-[#1f2a33] p-8 rounded-2xl shadow-[0_0_15px_#00eeff50]">
          <form
            action={import.meta.env.VITE_FORMSPREE_URL}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
            <input
              type="text"
              name="Name"
              placeholder="Name"
              required
              className="w-full p-3 rounded-md bg-transparent border-2 border-cyan-400 focus:outline-none text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md bg-transparent border-2 border-cyan-400 focus:outline-none text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className="w-full p-3 rounded-md bg-transparent border-2 border-cyan-400 focus:outline-none text-white placeholder-gray-400"
            />
            <textarea
              name="Message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-transparent border-2 border-cyan-400 focus:outline-none text-white placeholder-gray-400"
            ></textarea>

            <button
              type="submit"
              disabled={isDisabled}
              className={`font-semibold py-3 rounded-md transition-all ${
                isDisabled
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-cyan-400 text-[#1f242d] hover:bg-cyan-300"
              }`}
            >
              {isDisabled ? "Wait 24 Hours" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
