import { useParams } from "react-router-dom";
import { data } from "../lib/data.js";
import { Card } from "../components/card.jsx";
import { CardProjects } from "../components/CardProjects.jsx";

const ProjectIdPage = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const currentIndex = data.findIndex(
    (project) => String(project.id).trim() === String(projectId).trim()
  );

  if (currentIndex === -1) {
    return <h2>Project not found!</h2>;
  }

  const currentProject = data[currentIndex];
  console.log(currentProject);
  const nextProjects = [
    data[(currentIndex + 1) % data.length], // Next project
    data[(currentIndex + 2) % data.length], // Second next project
  ];

  return (
    <div className="w-full min-h-screen p-10">
      {/* Current Project Info */}
      <h1 className="text-7xl font-bold mb-8 ">{currentProject.title}</h1>
      <p className="text-2xl text-gray-700 mb-7 border-l-8 pl-6 border-purple-700">
        {currentProject.description}
      </p>
      <Card
        className="lg:px-55 h-[50rem]"
        height={"h-[25rem] md:h-[40rem] "}
        classNameHeader={"text-4xl md:text-6xl"}
        imageUrl={currentProject.imageUrl}
      />

      {/* Project Details */}
      <div className="w-full min-h-screen flex gap-8">
        <div className="w-[25rem] h-[10rem] border-2 rounded-2xl border-purple-700 flex flex-col sticky top-5 mx-8 p-6 ">
          <div className="flex gap-4 items-center justify-between">
            <h2 className="text-md flex flex-col tracking-wide font-bold mb-4">
              Year:{" "}
              <span className="text-xl font-semibold ">
                {currentProject.Year}
              </span>
            </h2>
            <p className="text-xl text-slate-800 font-bold ">
              Personal Project
            </p>
          </div>
          <p className="text-lg font-semibold text-slate-800 tracking-wider mb-4 flex flex-col">
            Role: <span>Software Developer</span>
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-wider">Project Details</h1>
          <p className="text-xl text-slate-700  p-4 mb-8">
            {currentProject.Details}
          </p>
          <h1 className="text-4xl font-bold tracking-wider">Challenges</h1>
          <p className="text-xl text-slate-700  p-4 mb-8">
            {currentProject.Challanges}
          </p>
          <h1 className="text-4xl font-bold tracking-wider">About</h1>
          <p className="text-xl text-slate-700  p-4 mb-8">
            {currentProject.About}
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <img
          src={currentProject.images[0]}
          className="col-span-1 rounded-2xl"
        />
        <img
          src={currentProject.images[1]}
          className="col-span-1 rounded-2xl"
        />
        <img
          src={currentProject.images[2]}
          className="col-span-2 rounded-2xl"
        />
      </div>

      {/* More Projects Section */}
      <div className="w-full h-screen  items-center justify-center flex-col gap-6 mt-6">
        <h1 className="text-6xl mb-6 font-bold tracking-wider mt-10">
          More Projects<span className="text-6xl text-purple-700">.</span>
        </h1>

        <div className="h-full w-full flex items-center justify-center ">
          {nextProjects.map((project) => (
            <CardProjects
              key={project.id} // Added the missing key prop
              className="h-[20rem]"
              height={"h-[25rem] md:h-[40rem] "}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              projectsId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdPage;
