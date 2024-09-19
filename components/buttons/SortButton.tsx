import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { blue } from "@mui/material/colors";

const SortButton = ({ header }: AddButtonProps) => {
  const name = header === "project" ? "Projects" : "Tasks";
  return (
    <div className="flex text-15 font-semibold gap-2 max-sm:gap-1">
      <span className="text-gray-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-300">Recent {name}</span>
        <KeyboardArrowDownIcon sx={{ color: blue[600] }} />
      </div>
    </div>
  );
};

export default SortButton;
