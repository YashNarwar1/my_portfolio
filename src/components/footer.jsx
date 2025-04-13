import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="relative h-[600px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}>
      <div className=" h-[600px] w-full  right-0 bg-[#1C1C1C] px-5 sm:px-15 fixed bottom-0">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="flex lg:gap-14 max-w-[50%] py-10">
              <div className="lg:flex flex-col gap-1  hidden">
                <h1 className="text-2xl font-bold mb-6 text-slate-100 tracking-wider">
                  Skills
                </h1>
                <ul className="flex flex-col gap-3 text-slate-300">
                  <li>Web development</li>
                  <li>UI design</li>
                  <li>Problem solving</li>
                  <li>Communication</li>
                  <li>DSA</li>
                </ul>
              </div>
              <div className="flex flex-col gap-1 ">
                <h1 className="text-2xl font-bold mb-6 text-slate-100 tracking-wider">
                  Pages
                </h1>
                <ul className="flex lg:flex-col lg:gap-3 gap-10 text-slate-300">
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                </ul>
              </div>
            </div>
            <div className="lg:py-20 py-10  ">
              <h1 className="text-2xl font-semibold text-end text-slate-200">
                Hey there 👋🏻
              </h1>
              <h1 className="text-6xl md:text-[5rem] xl:text-[8rem] text-end text-slate-400">
                I'm <span className="text-purple-700">Y.</span>Narwar
              </h1>
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row py-10 justify-between w-full">
            <Link
              to="/contact"
              className="px-10  py-1 h-[3rem] flex justify-center items-center rounded-xl text-lg border-1 bg-slate-300">
              Let's Connect
            </Link>
            <p className="text-md text-slate-300 tracking-wide">
              @2025 All Rights Are Reserved <br /> Made By Yash Narwar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
