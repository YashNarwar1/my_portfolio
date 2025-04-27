import { GitCommit, LucideCircleArrowOutUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { data } from "../lib/data.js";

export const CardProjects = ({
  className,
  classNameHeader,
  imageUrl,
  title,
  description,
  height,
  projectsId,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-screen sticky top-2 bg-white  rounded-xl flex flex-col gap-2 mt-4  px-3 ",
        height
      )}>
      <div
        className={cn(
          "flex items-center justify-center w-full h-full overflow-hidden  px-10  rounded-xl bg-[url('/bg.png')] bg-cover filter-grayscale hover:filter-none",
          className
        )}>
        <motion.div
          className="w-full h-[98%] rounded-3xl  bg-cover bg-no-repeat"
          style={{
            scale,
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Link to={`/projects/${projectsId}`}>
          <h1
            className={cn("  font-bold text-black pt-2", classNameHeader)}
            asChild>
            {title}
          </h1>
        </Link>
        <a href="https://github.com/YashNarwar1">
          {" "}
          <LucideCircleArrowOutUpRight className="w-5 h-5 hover:text-purple-700 border-1 cursor-pointer" />{" "}
        </a>
      </div>
      <p className=" text-slate-800 font-light text-2xl mb-5">{description}</p>
    </div>
  );
};
