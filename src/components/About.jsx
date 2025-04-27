import { motion } from "framer-motion";
import { SimpleFooter } from "./simpleFooter";
import {
  Check,
  CheckCheckIcon,
  CopyIcon,
  GitCommitHorizontal,
} from "lucide-react";
import { useState } from "react";
import { StackCard } from "./stackCard";
import { tecStack } from "../lib/data";

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
    <>
      <motion.div
        id="about"
        className="w-full min-h-screen flex flex-col   mt-10 py-5 px-3 md:px-10">
        <h1 className="text-6xl font-bold tracking-wider   mb-10">
          About<span className="font-bold text-4xl text-purple-700">.</span>
        </h1>
        <div className="flex lg:flex-row flex-col justify-between lg:items-center h-full px-4 ">
          <div className="flex flex-1 flex-col  border-r-1 border-slate-300 gap-4">
            <h2 className="text-2xl font-bold tracking-wide mb-6 ">
              Skills
              <span className="text-4xl font-bold text-purple-700">.</span>
            </h2>
            <div className="ml-10 lg:ml-1 flex flex-col gap-4 mb-6 font-semibold tracking-wider">
              <p className="text-lg text-slate-300 ">Web Design</p>
              <p className="text-lg text-slate-300">UI/UX</p>
              <p className="text-lg text-slate-300">
                Frontend/Backend Development
              </p>
              <p className="text-lg text-slate-300">
                Database management (SQL / NoSql)
              </p>
              <p className="text-lg text-slate-300">
                Data Structure & Algorithms
              </p>
              <p className="text-lg text-slate-300">
                Fluent/Effective Communication (English)
              </p>
              <p className="text-lg text-slate-300">Problem Solving</p>
              <p className="text-lg text-slate-300">Leadership</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col  ml-4 border-r border-slate-300">
            <h1 className="text-2xl font-bold tracking-wider mb-6 ">
              About Me
              <span className="font-bold text-4xl text-purple-700">.</span>
            </h1>
            <p className="text-lg text-slate-300 tracking-normal px-3 my-4 leading-relaxed">
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
          <div className="flex flex-1 flex-col px-1  mt-6 lg:mt-0">
            <h1 className="text-2xl font-bold tracking-wider mb-8">
              Tec Stack<span className="font-bold text-4xl">.</span>
            </h1>
            <div className="grid grid-cols-3 px-4 gap-5">
              {tecStack.map((stack) => (
                <StackCard className="p-1 lg:p-4 border-2 border-slate-500   flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75">
                  {stack}
                </StackCard>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
