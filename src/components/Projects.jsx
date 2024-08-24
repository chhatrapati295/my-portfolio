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
    <div className="py-16 flex flex-col gap-16 items-center">
      <span className="md:hidden font-medium uppercase">* Projects *</span>
      <h4 className="text-5xl md:block hidden  font-bold whitespace-nowrap z-30 text-slate-400 animate-pulse opacity-25">
        PROJECTS
      </h4>
      <div className="flex flex-wrap gap-16 justify-around">
        {projectData?.map((item, i) => {
          return <ProjectCard key={i} projectData={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
