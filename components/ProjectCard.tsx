import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

const ProjectCard = () => {
  return (
    <div className="flex-col bg-slate-700 w-[300px] max-md:w-[96%] flex gap-8 rounded-lg">
      <div className="flex-center bg-slate-700 pl-3 mt-3">
        <div className=" justify-start w-[40px] h-[40px] bg-gradient-to-r from-[#a21caf] via-[#007cf0] to-[#00fcae] p-1 rounded-md">
          <LibraryBooksIcon
            className="text-white"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex gap-3 items-center w-full">
          {/* Apply gradient to the icon */}
          {/* <div className="w-[40px] h-[40px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] p-1 rounded-md"> */}

          <div className="flex flex-col pl-3">
            <span className="font-semibold text-[19px]">Project Title</span>
            <span className="text-slate-400 text-[13px]">2 days ago</span>
          </div>
        </div>
        <div>
          <MoreVertIcon />
        </div>
      </div>

      <div className="text-slate-400 border text-[13px] flex flex-col gap-2 ml-3 mr-3">
        <li className="flex gap-2 items-center">
          <CircleIcon className="text-[8px]" />
          <span>sontensajkdfn;jkfesabfjksbfask;f</span>
        </li>
        <li className="flex gap-2 items-center">
          <CircleIcon className="text-[8px]" />
          <span>sontensajkdfn;jkfesabfjksbfask;f</span>
        </li>
      </div>

      <div className="flex gap-4 flex-col mt-2 mx-2 ">
        <div className="text-[12px] gap-3 items-center flex w-full">
          <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
            <div className="w-1/2 bg-gradient-to-r from-[#5721B7] via-[#D668CD] to-[#007cf0] rounded-r-xl"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[13px] text-white">In Progress</p>
          <div className="flex gap-1 text-[13px]">
            <p>78%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

//           <div className="w-[40px] h-[40px] bg-gradient-to-r from-[#6b0f7a] via-[#004aad] to-[#008f5e] p-1 rounded-md">

export default ProjectCard;
