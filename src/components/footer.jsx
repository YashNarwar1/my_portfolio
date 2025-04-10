import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="relative h-[600px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}>
      <div className=" h-[600px] w-full  right-0 bg-[#1C1C1C] px-15 fixed bottom-0">
        <div className="flex flex-col lg:flex-row justify-between h-full ">
          <div className="flex flex-col mt-10 justify-between">
            <ul className="flex md:flex-col text-lg justify-between gap-2 sm:gap-4 sm:px-5 ">
              <li className="text-slate-200  hover:text-purple-700 tracking-widest ">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="text-slate-200 hover:text-purple-700 tracking-widest ">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-slate-200 hover:text-purple-700 tracking-widest ">
                <Link to={"/about"}>Education</Link>
              </li>
              <li className="text-slate-200 hover:text-purple-700 tracking-widest ">
                <Link>skills</Link>
              </li>
            </ul>

            <div className="flex flex-col min-w-[30rem] gap-4 py-10 ">
              <h1 className="text-2xl text-white tracking-wider md:text-3xl lg:text-4xl">
                Let's Connect
              </h1>

              <button className="px-4 py-2  md:w-[14rem]  rounded-lg text-white border-2 border-white mt-2 hover:opacity-75 cursor-pointer hover:border-purple-700">
                <Link to="/projects">Browse projects</Link>
              </button>
            </div>
          </div>

          <div className="h-full  flex  w-full items-end justify-between  flex-col px-5  ">
            <div className="flex flex-col items-end md:mt-10 py-6 ">
              <p className="text-2xl text-slate-200 font-semibol tracking-normal">
                Hey there 👋🏻 <br />
              </p>
              <h1 className="text-7xl  text-white lg:text-[5rem] xl:text-[8rem]">
                I'm Y.Narwar
              </h1>
            </div>

            <p className="pb-2 px-5 sm:px-2 text-slate-200 tracking-wider items-end">
              @2025 All Rights Are Reserved <br />
              Made By Yash Narwar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
