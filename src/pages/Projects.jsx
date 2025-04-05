import { Link } from "react-router-dom";
import { Card } from "../components/card";
import { CardProjects } from "../components/CardProjects";
import { data } from "../lib/data.js";

const Projects = () => {
  return (
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
            height={"h-[30rem] md:h-[40rem] "}
            classNameHeader={"text-4xl md:text-6xl"}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            projectsId={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <CardProjects
           className="lg:px-55 h-[50rem]"
          height={"h-[25rem] md:h-[40rem] "}
          classNameHeader={"text-4xl md:text-6xl"}
          imageUrl={"/jira.png"}
          title={"Jira Clone"}
          description={
            "An all rounder application for mangement of projects with adding tasks and a lot's more features."
          }
          projectsId={1}
        />
        <CardProjects
          imageUrl={"/food_app.png"}
          className="lg:px-55 h-[50rem]"
          classNameHeader={"text-4xl md:text-6xl"}
          height={"h-[30rem] md:h-[40rem] "}
          title={"Food Ordering App"}
          description={
            "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
          }
          projectsId={2}
        />
        <CardProjects
          imageUrl={"/bloom_chat.png"}
          className="lg:px-55 h-[50rem]"
          height={"h-[25rem] md:h-[40rem] "}
          classNameHeader={"text-4xl md:text-6xl"}
          title={"Bloom Chat"}
          description={
            "A robust chat application with multiple user friendly features."
          }
          projectsId={3}
        />
        <CardProjects
          className="lg:px-55 h-[50rem] "
          height={"h-[25rem] md:h-[40rem]"}
          classNameHeader={"text-4xl md:text-6xl"}
          imageUrl={"/taskify.png"}
          title={"Taskify"}
          description={
            "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
          }
          projectsId={4}
        /> */
}
