import { useEffect, useState } from "react";
import { ProjectsData } from "../Data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const data = ProjectsData;
  useEffect(() => {
    setProjectData(data);
  }, [data]);

  return (
    <div className="md:py-16 md:w-7/12 w-11/12 mx-auto pb-16 pt-0 flex flex-col md:gap-16 gap-8 items-center">
      <span className="md:hidden font-medium uppercase">* Projects *</span>
      <h4 className="text-5xl md:block hidden  font-bold whitespace-nowrap z-30 text-slate-400 animate-pulse opacity-25">
        PROJECTS
      </h4>
      <div className="flex flex-wrap gap-16 justify-around">
        {projectData?.map((item, i) => {
          return <ProjectCard key={i} projectData={item} />;
        })}
      </div>
      <h4 className="md:text-2xl font-bold whitespace-nowrap z-30  animate-bounce opacity-25">
        Coming soon...
      </h4>
    </div>
  );
};

export default Projects;
