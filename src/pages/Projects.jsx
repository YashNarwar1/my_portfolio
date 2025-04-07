import { Link } from "react-router-dom";
import { Card } from "../components/card";
import { CardProjects } from "../components/CardProjects";
import { data } from "../lib/data.js";
import { SimpleFooter } from "../components/simpleFooter";

const Projects = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="w-full  flex flex-col px-4">
        <h1 className="text-6xl md:text-8xl  font-bold tracking-tight mt-20 mb-5">
          My <span className="text-purple-700">Best</span> Work
          <span className="text-7xl font-bold text-purple-700">.</span>
        </h1>
        <p className="text-xl lg:w-[70%] md:text-2xl text-slate-800">
          A Collection of projects showcasing my skills in building dynamic,
          scalable and user-friendly applications.
        </p>
        <div className="w-full  flex flex-col gap-20 ">
          {data.map((project) => (
            <CardProjects
              key={project.id}
              className="lg:px-55 h-[50rem] pointer-cursor mt-4"
              height={"h-[25rem] md:h-[40rem] "}
              classNameHeader={"text-4xl md:text-6xl"}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              projectsId={project.id}
            />
          ))}
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Projects;
