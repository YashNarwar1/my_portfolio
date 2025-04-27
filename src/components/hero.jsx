import { Link } from "react-router-dom";

import { DownloadCv } from "../lib/DownloadCv";

export const Hero = () => {
  return (
    <div className="flex w-full md:min-h-[100vh] px-3 md:px-20 flex-col  lg:flex-row mb-10 justfiy-center lg:items-center">
      <div className="flex flex-col gap-5 my-20 mx-10 w-full">
        <h1 className="text-2xl md:text-4xl tracking-tight">
          Hey, I'm Yash 🖐️
          <span className="text-purple-800"> Narwar</span>
        </h1>
        <h2 className="text-4xl sm:text-6xl xl:text-[6rem] 2xl:text-[8rem] tracking-wide text-white font-light  mb-10">
          <span className="text-purple-800">Full_</span>Stack Developer
        </h2>
        <p className="text-slate-200 md:text-xl ">
          Crafting seamless digital experiences with clean code and creative
          solutions. I build web apps that are fast, functional, and
          user-friendly.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-1 sm:gap-6 md:mt-10">
          <button className="px-4 py-1 md:py-2 w-[10rem] lg:w-[14rem] bg-purple-700 rounded-lg md:text-xl text-white mt-10 hover:opacity-85 cursor-pointer">
            <Link to="/contact">Get In Touch</Link>
          </button>
          <button
            onClick={DownloadCv}
            className="px-2  py-2 md:py-2 w-[14rem] rounded-lg text-white border-2 mt-10 hover:opacity-75 cursor-pointer hover:border-purple-700 md:text-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
