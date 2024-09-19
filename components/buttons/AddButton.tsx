import React from "react";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ header }: AddButtonProps) => {
  const title = header === "project" ? "Project" : "Task";
  return (
    <button className="neon-button text-white px-2 pr-3 text-15 rounded-md flex-center">
      <AddIcon className="mt-[2px]" />
      <span className="max-sm:hidden">New {title}</span>
    </button>
  );
};

export default AddButton;
