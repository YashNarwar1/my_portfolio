import { Card } from "./card";

import { data } from "../lib/data";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowBigRightDashIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  const smoothX = useSpring(x, { stiffness: 70, damping: 30 });

  return (
    <div ref={targetRef} className="h-[500vh] relative pb-10  md:px-10">
      <h1 className="text-5xl font-bold tracking-wider my-10 ">
        Projects<span className="text-4xl font-bold text-purple-600">.</span>
      </h1>

      {/* Sticky container that pins the horizontal scroll */}
      <div className="h-screen sticky top-0 flex  items-center overflow-hidden">
        <motion.div
          className="flex gap-[3vw] px-16 w-max"
          style={{ x: smoothX }}>
          <div className="flex-none w-[80vw] h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <Link to={`/projects/${data[0].id}`}>
                <Card
                  imageUrl={"/jira.png"}
                  smallImageUrl={"/jira_sm.png"}
                  title={"Jira Clone"}
                  description={
                    "An all rounder application for mangement of projects with adding tasks and a lot's more features."
                  }
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex-none w-[80vw] h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <Link to={`/projects/${data[1].id}`}>
                <Card
                  imageUrl={"/food_app.png"}
                  smallImageUrl={"/food_sm.png"}
                  title={"Tasty"}
                  description={
                    "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
                  }
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex-none w-[80vw] h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <Link to={`/projects/${data[2].id}`}>
                <Card
                  imageUrl={"/chat.png"}
                  smallImageUrl={"/chat_sm.png"}
                  title={"Bloom Chat"}
                  description={
                    "A robust chat application with multiple user friendly features."
                  }
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex-none w-[80vw] h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <Link to={`/projects/${data[3].id}`}>
                <Card
                  imageUrl={"/taskify.png"}
                  smallImageUrl={"/taskify_sm.png"}
                  title={"Taskify"}
                  description={
                    "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
                  }
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA button */}
      <div className="flex w-full justify-end pr-16 absolute bottom-0.5 right-0">
        <Link to="/projects">
          <button className="w-[8rem] rounded-lg flex items-center justify-center gap-x-4 bg-purple-700 text-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-white hover:opacity-75">
            More
            <ArrowBigRightDashIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
