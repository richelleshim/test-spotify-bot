import { Checkbox, ListItemIcon } from "@mui/material";
import React from "react";
import TaskCard from "./TaskCard";

const Tasks = () => {
  return (
    <div className="ml-4 flex-col flex gap-4">
      <div className="flex items-center gap-2 ml-3 mt-8 mb-5">
        <div className="flex gap-2 text-white font-semibold">
          <span>Incomplete Tasks</span>
          <span className="neon-button text-white rounded-md px-2">
            7
          </span>
        </div>
        <div className="text-slate-400 gap-2 items-center flex">
          <span>Completed Tasks</span>
          <span className="bg-slate-200 rounded-md px-2">7</span>
        </div>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default Tasks;
