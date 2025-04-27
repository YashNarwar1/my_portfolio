import { MessageSquareIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { NavLink } from "react-router-dom"; // ⬅️ Use NavLink instead of Link

export const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto py-4 hidden justify-between items-center md:flex">
      <h1 className={cn("lg md:text-3xl font-bold px-2 text-slate-700")}>
        YashNW
        <span className="font-bold text-3xl text-purple-600">.</span>
      </h1>

      <div className="h-full md:text-xl px-6 border-2 rounded-2xl py-2 border-l-purple-500 border-r-purple-500">
        <ul className="flex items-center h-full gap-8 transition duration-500">
          <li className="tracking-wide cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "hover:text-purple-700 hover:font-semibold",
                  isActive ? "text-purple-700 font-semibold" : "text-slate-300"
                )
              }>
              Home
            </NavLink>
          </li>

          <li className="tracking-wide cursor-pointer">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                cn(
                  "hover:text-purple-700 hover:font-semibold",
                  isActive ? "text-purple-700 font-semibold" : "text-slate-300"
                )
              }>
              Projects
            </NavLink>
          </li>

          <li className="tracking-wide cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "hover:text-purple-700 hover:font-semibold",
                  isActive ? "text-purple-700 font-semibold" : "text-slate-300"
                )
              }>
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <NavLink
        className={({ isActive }) =>
          cn(
            "hover:text-purple-700 hover:font-semibold",
            isActive ? "text-purple-700 font-semibold" : "text-slate-700"
          )
        }
        to="/contact">
        <MessageSquareIcon className="h-5 w-5 md:h-8 md:w-8 hover:text-purple-600 cursor-pointer" />
      </NavLink>
    </div>
  );
};

// import { MessageSquareIcon } from "lucide-react";
// import { cn } from "../lib/utils";
// import { Link } from "react-router-dom";

// export const Navbar = () => {

//   return (
//     <div className="max-w-[90rem] mx-auto py-4 hidden justify-between items-center  md:flex">
//       <h1 className={cn("lg md:text-3xl font-bold px-2  text-slate-700")}>
//         YashNW
//         <span className="font-bold text-3xl  text-purple-600">.</span>
//       </h1>
//       <div className=" h-full   md:text-xl  px-6 border-2 rounded-2xl py-2 border-l-purple-500 border-r-purple-500 ">
//         <ul className="flex items-center h-full gap-8 transition duration-500">
//           <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold ">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold  ">
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li className="tracking-wide hover:text-purple-700 cursor-pointer hover:font-semibold  ">
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </div>
//       <Link to="/contact" asChild>
//         <MessageSquareIcon className="h-5 w-5 md:h-8 md:w-8 hover:text-purple-600 cursor-pointer" />
//       </Link>
//     </div>
//   );
// };
