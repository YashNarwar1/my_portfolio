import { useState } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-[100%] bg-slate-800 md:hidden flex flex-col justify-between p-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          YashNW<span className="font-bold text-purple-800">.</span>
        </h1>

        <div
          className="w-10 h-10 flex gap-3 justify-center items-center cursor-pointer relative"
          onClick={handleNavOpen}>
          <div
            className={cn(
              "absolute w-6 h-[2px] bg-black transition-all duration-500",
              isOpen ? "rotate-45 -translate-y-2" : ""
            )}
          />
          <div
            className={cn(
              "absolute w-6 h-[2px] mt-4 bg-black transition-all duration-500",
              isOpen ? "-rotate-45 -translate-y-4" : ""
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "w-full min-h-[10rem] text-black bg-slate-100  absolute top-20 left-0 flex flex-col ml-4 font-bold gap-2 pt-5 pl-3 transition-transform duration-500 ease-in-out z-40 ",
          isOpen ? "translate-x-0 flex" : " translate-x-[-50rem]"
        )}>
        <span
          onClick={handleNavOpen}
          className={cn(
            "p-2 w-full cursor-pointer hover:bg-slate-200 transition-all duration-1000",
            isOpen ? "translate-x-0 " : "translate-x-30"
          )}>
          <Link to="/">Home</Link>
        </span>

        <span
          onClick={handleNavOpen}
          className={cn(
            "p-2 w-full cursor-pointer hover:bg-slate-200 transition-all duration-1100",
            isOpen ? "translate-x-0 " : "translate-x-30 "
          )}>
          <Link to="/projects">Projects</Link>
        </span>

        <span
          onClick={handleNavOpen}
          className={cn(
            "p-2 w-full cursor-pointer hover:bg-slate-200 transition-all duration-1200",
            isOpen ? "translate-x-0 " : "translate-x-30"
          )}>
          <Link to="/about">About</Link>
        </span>

        <span
          onClick={handleNavOpen}
          className={cn(
            "p-2 w-full cursor-pointer hover:bg-slate-200 transition-all duration-1400",
            isOpen ? "translate-x-0 " : "translate-x-30"
          )}>
          <Link to="/contact">Get In Touch</Link>
        </span>
      </div>
    </div>
  );
};
