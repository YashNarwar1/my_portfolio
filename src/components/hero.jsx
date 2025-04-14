import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { DownloadCv } from "../lib/DownloadCv";
import { Button } from "./button";

export const Hero = () => {
  const handControls = useAnimation();

  useEffect(() => {
    // Sequence: zoom in + wave + return
    handControls.start({
      scale: [1, 8, 8, 1],
      rotate: [0, 20, -20, 20, -20, 0],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.4, 1],
        ease: "easeInOut",
      },
    });
  }, []);

  return (
    <div className="flex w-full md:min-h-[100vh] px-3 md:px-20 flex-col  lg:flex-row mb-10 justfiy-center lg:items-center">
      <div className="flex flex-col my-20 mx-10 lg:w-[50%]">
        <h1 className="text-3xl tracking-tight">
          Hey, I'm Yash{" "}
          <motion.span
            animate={handControls}
            initial={{ scale: 1 }}
            style={{ display: "inline-block" }}>
            🖐️
          </motion.span>
        </h1>
        <h2 className="text-6xl md:text-8xl tracking-wide text-black font-bold mb-10">
          <span className="text-purple-800">Full_</span>Stack Developer
        </h2>
        <p className="text-slate-800 text-xl ">
          Crafting seamless digital experiences with clean code and creative
          solutions. I build web apps that are fast, functional, and
          user-friendly.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-1 sm:gap-6 md:mt-10">
          <button className="px-4 py-2 w-[10rem] lg:w-[14rem] bg-purple-700 rounded-lg text-xl text-white mt-10 hover:opacity-85 cursor-pointer">
            <Link to="/contact">Get In Touch</Link>
          </button>
          <button
            onClick={DownloadCv}
            className="px-4 py-2 w-[14rem] rounded-lg text-black border-2 mt-10 hover:opacity-75 cursor-pointer hover:border-purple-700">
            Download CV
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center border-2 border-purple-700 rounded-full w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] mx-auto md:ml-40">
        <img
          src="/yash.jpg"
          alt="user"
          className="w-full h-full grayscale-75 rounded-full p-6 bg-cover"
        />
      </div>
    </div>
  );
};

// export const Hero = () => {
//   return (
//     <div className="flex w-full md:min-h-[100vh] px-3 md:px-20 flex-col   lg:flex-row mb-10 justfiy-center lg:items-center    ">
//       <div className="flex flex-col my-20  lg:w-[50%]">
//         <h1 className="text-3xl tracking-tight">Hey, I'm Yash 👋🏻 </h1>
//         <h2 className="text-6xl md:text-8xl tracking-wide text-black font-bold mb-10">
//           <span className="text-purple-800">Full_</span>Stack Developer
//         </h2>
//         <p className="text-slate-800 text-xl ">
//           Crafting seamless digital experiences with clean code and creative
//           solutions. I build web apps that are fast, functional, and
//           user-friendly.
//         </p>
//         <div className="flex flex-col sm:flex-row w-full gap-1 sm:gap-6 md:mt-10">
//           <button className="px-4 py-2  w-[10rem] lg:w-[14rem] bg-purple-700 rounded-lg text-xl text-white mt-10 hover:opacity-85    cursor-pointer">
//             <Link to="/contact">Get In Touch</Link>
//           </button>
//           <button
//             onClick={DownloadCv}
//             className="px-4 py-2 w-[14rem] rounded-lg text-black border-2 mt-10 hover:opacity-75 cursor-pointer hover:border-purple-700">
//             Download CV
//           </button>
//         </div>
//       </div>
//       <div className="flex items-center justify-center border-2 border-purple-700 rounded-full w-[20rem] h-[20rem]   lg:w-[30rem] lg:h-[30rem] mx-auto md:ml-40  ">
//         <img
//           src="/yash.jpg"
//           alt="user"
//           className="w-full h-full grayscale-75  rounded-full p-6 bg-cover"
//         />
//       </div>
//     </div>
//   );
// };
