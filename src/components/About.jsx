import { motion } from "framer-motion";
import { span } from "framer-motion/client";
import {
  Check,
  CheckCheckIcon,
  CopyIcon,
  GitCommitHorizontal,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("yashnarwar111.gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <motion.div id="about" className="w-full min-h-screen flex flex-col  py-5">
      <h1 className="text-6xl font-bold tracking-wider   mb-10">
        About<span className="font-bold text-4xl text-purple-700">.</span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-between  px-4 ">
        <div className="flex flex-1 flex-col  border-r-1 border-slate-300 gap-4">
          <h2 className="text-2xl font-bold tracking-wide mb-6 ">
            Skills<span className="text-4xl font-bold text-purple-700">.</span>
          </h2>
          <div className="ml-10 lg:ml-1 flex flex-col gap-4 mb-6 font-semibold tracking-wider">
            <p className="text-lg text-slate-600 ">Web Design</p>
            <p className="text-lg text-slate-600">UI/UX</p>
            <p className="text-lg text-slate-600">
              Frontend/Backend Development
            </p>
            <p className="text-lg text-slate-600">
              Database management (SQL / NoSql)
            </p>
            <p className="text-lg text-slate-600">
              Data Structure & Algorithms
            </p>
            <p className="text-lg text-slate-600">
              Fluent/Effective Communication (English)
            </p>
            <p className="text-lg text-slate-600">Problem Solving</p>
            <p className="text-lg text-slate-600">Leadership</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col  ml-4 border-r border-slate-300">
          <h1 className="text-2xl font-bold tracking-wider mb-6 ">
            About Me
            <span className="font-bold text-4xl text-purple-700">.</span>
          </h1>
          <p className="text-lg text-slate-600 tracking-normal px-3 my-4 leading-relaxed">
            👋 Hi, I'm Yash Nawar, a Full Stack Developer specializing in
            JavaScript & TypeScript. I build scalable, high-performance web
            applications using Next.js, Node.js, and MongoDB. Passionate about
            clean code, intuitive UI/UX, and solving real-world problems.
          </p>
          <p className="flex gap-4 items-center text-lg font-semibold mx-auto mt-16">
            Yashnarwar111@gmail.com{" "}
            <span onClick={handleCopy} className="cursor-pointer">
              {hasCopied ? (
                <span className="text-purple-700 flex gap-1 items-center">
                  Copied! <CheckCheckIcon className="w-5 h-5" />{" "}
                </span>
              ) : (
                <CopyIcon className="w-5 h-5" />
              )}
            </span>
          </p>
        </div>
        <div className="flex flex-1 flex-col px-4 mt-6 lg:mt-0">
          <h1 className="text-2xl font-bold tracking-wider mb-8">
            Tec Stack<span className="font-bold text-4xl">.</span>
          </h1>
          <div className="grid grid-cols-3 px-4 gap-5">
            <span className="p-4 border-1 border-slate-500   flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Javascript
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Typescript
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              CSS
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              React
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Node
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              MongoDB
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Express
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              NextJs
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              TailwindCSS
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Git <GitCommitHorizontal />
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Hono
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Figma
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              HTML5
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Three js
            </span>
            <span className="p-4 border-1 border-slate-500  flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
              Blender
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
