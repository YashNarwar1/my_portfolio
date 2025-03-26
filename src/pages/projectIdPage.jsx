import { Link, useParams } from "react-router-dom";
import { data } from "../lib/data.js";
import { Card } from "../components/card.jsx";

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
    <div className="w-full min-h-screen px-4">
      {/* Current Project Info */}
      <h1 className="text-5xl md:text-7xl font-bold mb-8 ">
        {currentProject.title}
      </h1>
      <p className="text-2xl md:text-3xl text-gray-700 mb-7 border-l-8 pl-6 py-6 border-purple-700">
        {currentProject.description}
      </p>
      <Card
        className="lg:px-55 h-[50rem]"
        height={"h-[17rem] md:h-[25rem] lg:h-[40rem] "}
        classNameHeader={"text-4xl md:text-6xl"}
        imageUrl={currentProject.imageUrl}
      />

      {/* Project Details */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row gap-8">
        <div className="w-[20rem] md:w-[25rem] min-h-[5rem] md:h-[10rem] border-2 rounded-2xl border-purple-700 flex flex-col  lg:sticky top-5 mx-auto  lg:p-6 px-3 ">
          <div className="flex gap-4 items-center justify-between">
            <h2 className="text-md flex flex-col tracking-wide font-bold mb-1 lg:mb-4">
              Year:{" "}
              <span className="text-xl font-semibold ">
                {currentProject.Year}
              </span>
            </h2>
            <p className="text-xl text-slate-800 font-bold ">
              Personal Project
            </p>
          </div>
          <p className="text-lg font-semibold text-slate-800 tracking-wider mb-1 lg:mb-4 flex flex-col">
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
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 lg:mt-10 grayscale-85">
        <img
          src={currentProject.images[0]}
          className="lg:col-span-1 rounded-2xl"
        />
        <img
          src={currentProject.images[1]}
          className="lg:col-span-1 rounded-2xl"
        />
        <img
          src={currentProject.images[2]}
          className="lg:col-span-2 rounded-2xl"
        />
      </div>

      {/* More Projects Section */}
      <div className="w-full h-[calc(100vh-10rem)]  lg:flex justify-center  flex-col gap-6 pt-19 mt-10 hidden ">
        <h1 className="text-6xl  font-bold tracking-wider mt-10">
          More Projects<span className="text-6xl text-purple-700">.</span>
        </h1>

        <div className="h-full w-full flex flex-col lg:flex-row justify-around items-center  ">
          {nextProjects.map((project) => (
            <Link to={`/projects/${project.id}`}>
              <Card
                key={project.id} // Added the missing key prop
                className="h-[20rem]"
                height={"h-[25rem] md:h-[40rem] "}
                classNameHeader={"text-2xl md:text-4xl"}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                projectsId={project.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdPage;
