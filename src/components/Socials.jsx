import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { FaKaggle } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 md:gap-x-7 text-lg">
      <a
        href="https://github.com/mine-martin"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition-all duration-300 hover:scale-125"
        aria-label="GitHub Profile"
      >
        <RiGithubLine />
      </a>

      <a
        href="https://www.linkedin.com/in/martin-w-4749b21b1/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition-all duration-300 hover:scale-125"
        aria-label="LinkedIn Profile"
      >
        <RiLinkedinLine />
      </a>

      <a
        href="https://www.kaggle.com/minemartin"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition-all duration-300 hover:scale-125"
        aria-label="Kaggle Profile"
      >
        <FaKaggle />
      </a>

      <a
        href="https://twitter.com/martin_mine"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition-all duration-300 hover:scale-125"
        aria-label="Twitter Profile"
      >
        <RiTwitterLine />
      </a>
    </div>
  );
};

export default Socials;
