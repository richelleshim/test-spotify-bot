import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGridDisplay = () => {
  return (
    <div className="h-[78%] overflow-auto flex flex-wrap gap-4 mt-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

    </div>
  );
};

export default ProjectGridDisplay;
