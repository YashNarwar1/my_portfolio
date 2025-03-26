import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-2 lg:gap-2 items-center">
      <div className=" w-full py-15 mt-20 flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center lg:justify-start  text-lg gap-6">
          <span className="text-slate-600 font-semibold hover:text-purple-700  cursor-pointer">
            <Link to="/">Home</Link>
          </span>
          <span className="text-slate-600 font-semibold hover:text-purple-700 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </span>
          <span className="text-slate-600 font-semibold hover:text-purple-700 cursor-pointer">
            <Link to="/about">About</Link>
          </span>
          <span className="text-slate-600 font-semibold hover:text-purple-700 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </span>
        </div>
        <div className="flex justify-center lg:justify-end w-full gap-6">
          <a
            className="flex items-center justify-center  cursor-pointer"
            href="https://www.instagram.com/_n_a_r_w_a_r____y_a_s_h_">
            <img
              src="/instagram.png"
              className="w-6 h-6"
              alt="instagram icon"
            />
          </a>
          <a
            className="flex items-center justify-center cursor-pointer"
            href="https://www.linkedin.com/in/yash-narwar-ba1a9024a/">
            <img src="/linkedin.png" className="w-6 h-6" alt="instagram icon" />
          </a>
          <a
            className="flex items-center justify-center cursor-pointer"
            href="https://github.com/YashNarwar1">
            <img
              src="/github-sign.png"
              className="w-6 h-6"
              alt="instagram icon"
            />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col ">
          <h1 className="text-2xl  flex items-center text-slate-500 font-bold tracking-wider">
            Interesting in working together
            <span className="text-2xl font-bold text-purple-700">?</span>
          </h1>
          <div className="flex gap-6 my-5">
            <button
              asChild
              className="px-4 py-2 w-[10rem] bg-purple-700 rounded-lg text-white  hover:opacity-75 cursor-pointer">
              <Link to="/contact">Get In Touch</Link>
            </button>
            <button className="px-4 py-2 w-[10rem] rounded-lg text-black border-2  hover:opacity-75 cursor-pointer hover:border-purple-700">
              <Link to="/projects">Browse Projects</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <p className="text-slate-600 text-lg">
            ©2025 All Rights Are Reserved{" "}
          </p>
          <p className="text-slate-600 text-lg">Made with ❤️ by Yash Narwar</p>
        </div>
      </div>
    </div>
  );
};
