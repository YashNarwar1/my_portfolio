import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DownloadCv } from "../lib/DownloadCv";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-20 mb-15 z-2 items-center ">
      <div className="flex flex-col  mx-10 lg:w-[50%]">
        <h1 className="text-3xl tracking-tight">Hey, I'm Yash 👋🏻 </h1>
        <h2 className="text-6xl tracking-wide text-black font-bold mb-10">
          <span className="text-purple-800">Front</span>end Developer
        </h2>
        <p className="text-slate-800 text-lg ">
          Crafting seamless digital experiences with clean code and creative
          solutions. I build web apps that are fast, functional, and
          user-friendly.
        </p>
        <div className="flex gap-6 md:mt-20">
          <button className="px-4 py-2 w-[10rem] bg-purple-700 rounded-lg text-white mt-10 hover:opacity-75 cursor-pointer">
            <Link to="/contact">Get In Touch</Link>
          </button>
          <button
            onClick={DownloadCv}
            className="px-4 py-2 w-[10rem] rounded-lg text-black border-2 mt-10 hover:opacity-75 cursor-pointer hover:border-purple-700">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center border-2 border-purple-700 rounded-full w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[25rem] lg:h-[25rem] mx-auto md:ml-40 mt-20 md:mt-20">
        <img
          src="/yash.jpg"
          alt="user"
          className="w-full h-full grayscale-75  rounded-full p-6 bg-cover"
        />
      </div>
    </div>
  );
};
