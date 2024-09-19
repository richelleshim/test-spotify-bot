import HeaderBoxTemplate from "@/components/HeaderBoxTemplate";
import ProjectGridDisplay from "@/components/ProjectGridDisplay";
import RightSideBar from "@/components/RightSideBar";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import AddButton from "@/components/buttons/AddButton";
import AddProjectButton from "@/components/buttons/AddButton";
import SortButton from "@/components/buttons/SortButton";
import React from "react";

const Projects = () => {
  return (
    <section className="flex bg-zinc">
      <Sidebar />
      <div className="flex-col mt-6 home-content">
        <div className="flex justify-between">
          <SearchBar />
          <AddButton header="project" />
        </div>
        <div className="mt-10 bg-zinc flex items-center justify-between w-full font-bold border">
          <HeaderBoxTemplate title="My Projects" />
          <SortButton header="project"  />
        </div>
        <ProjectGridDisplay />
      </div>
      <RightSideBar />
    </section>
  );
};
export default Projects;
