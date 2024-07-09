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
    <div className="py-16 flex flex-col gap-8 items-center">
      <span className="font-medium uppercase">* Projects *</span>
      <div className="flex flex-wrap gap-16 justify-around">
        {projectData?.map((item, i) => {
          return <ProjectCard key={i} projectData={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
