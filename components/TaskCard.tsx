import { Checkbox } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ListIcon from "@mui/icons-material/List";

import React from "react";
import Circle from "@mui/icons-material/Circle";

const TaskCard = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox className="text-white" />
      <div
        className="w-full bg-black rounded-lg  flex gap-3 items-center justify-between p-5 py-6"
        style={{ boxShadow: "0 0px 10px rgba(255, 255, 255, 0.8)" }}
      >
        <div className="flex gap-3 items-center">
          <div>
            {/* <div className="bg-gradient-to-r from-[#a21caf] via-[#007cf0] to-[#00fcae] p-1 rounded-md"> */}
            <div className="bg-gradient-to-r from-[#a21caf] via-[#007cf0] to-[#00fcae] p-1 rounded-md">
              <ListIcon className="text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold hover:text-backgroundImage-purpleGradient from-[#a21caf] via-[#007cf0] to-[#00fcae] cursor-pointer">
              Create the UI Design
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">
                Project
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 font-bold justify-end items-center">
          <div className="flex gap-2 items-center">
            <CachedIcon className="text-[24px] text-slate-400" />
            <span className="text-[14px[ text-slate-400">In Progress</span>
          </div>
          <div className="flex gap-1 items-center">
            <Circle className="text-[10px] text-green-600" />
            <span className="text-[14px] text-slate-400"> Low </span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center cursor-pointer transition-all">
              <EditOutlinedIcon />
            </div>
            <div className=" rounded-lg flex-center  gap-2 cursor-pointer transition-all">
              <DeleteOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
