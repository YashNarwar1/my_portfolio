import { MessageSquareIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const mode = "light";

  return (
    <div className="w-full p-4 px-10 hidden justify-between items-center  md:flex">
      <h1
        className={cn(
          "lg md:text-xl font-bold px-2 ",
          mode === "dark" ? "text-white" : "text-slate-700"
        )}>
        YashNW<span className="font-bold text-2xl  text-purple-600">.</span>
      </h1>
      <div className=" h-full   md:text-lg  px-6  rounded-lg">
        <ul className="flex items-center h-full gap-8 transition duration-500">
          <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold ">
            <Link to="/">Home</Link>
          </li>
          <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold  ">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold  ">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Link to="/contact" asChild>
        <MessageSquareIcon className="h-5 w-5 md:h-8 md:w-8 hover:text-purple-600 cursor-pointer" />
      </Link>
    </div>
  );
};
