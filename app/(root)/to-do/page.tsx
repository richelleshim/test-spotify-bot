import HeaderBoxTemplate from "@/components/HeaderBoxTemplate";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Tasks from "@/components/Tasks";
import AddButton from "@/components/buttons/AddButton";
import AddProjectButton from "@/components/buttons/AddButton";
import SortButton from "@/components/buttons/SortButton";
import React from "react";

const ToDo = () => {
  return (
    <section className="flex bg-zinc">
      <Sidebar />
      <div className="flex-col mt-6 home-content">
        <div className="flex justify-between">
          <SearchBar />
          <AddButton header="todo" />
        </div>
        <div className="mt-10 bg-zinc flex items-center justify-between ml-2 w-full font-bold">
          <HeaderBoxTemplate title="Tasks" />
          <SortButton header="todo" />
        </div>
        <Tasks />
      </div>
    </section>
  );
};

export default ToDo;
