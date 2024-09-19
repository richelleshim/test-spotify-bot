import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="flex justify-end items-center border right-sidebar">
      <div className="w-94% h-[92%] flex flex-col">
        {/* TITLE */}
        <div className="flex gap-11 flex-col">
          <h2 className="text-[22px] font-bold text-center mt-7">Projects</h2>
          <div className="flex-center">
            <div
              //   className="flex-center w-40 h-40 mt-5 rounded-full  bg-gradient-to-r from-[#a21caf] via-[#007cf0] to-[#00fcae]drop-shadow-lg"
              className="flex-center w-40 h-40 mt-5 rounded-full bg-gradient-to-r from-[#6b0f7a] via-[#004aad] to-[#008f5e] drop-shadow-lg"
              style={{ boxShadow: "0 0px 10px rgba(255, 255, 255, 0.8)" }}
            >
              <div className="w-[85%] h-[85%] flex-center rounded-full bg-zinc">
                <span className="text-xl font-semibold text-white">90%</span>
              </div>
            </div>
          </div>
        </div>
        {/* TITLE */}

        <div className="flex-center flex-col gap-1">
          <p className="font-bold text-16">3 completed</p>
          <p className="text-13">20 tasks done</p>
        </div>
        {/* TITLE */}

        <ul className="flex flex-col gap-3 mt-10 mx-4 overflow auto">
          <li className="p-3 flex gap-2 items-center">
            <div className="flex-center w-8 h-8 bg-backgroundImage-purpleGradient rounded-md">
              <CircleIcon />
            </div>
            <ul>
              <li className="text-[14px] font-semibold">Project1</li>
              <li className="text-[12px] text-slate-400">3 tasks</li>
            </ul>
          </li>
          <hr className="w-[80%] mx-auto text-white opacity-50"></hr>
          <li className="p-3 flex gap-2 items-center">
            <div className="flex-center w-8 h-8 bg-backgroundImage-purpleGradient rounded-md">
              <CircleIcon />
            </div>
            <ul>
              <li className="text-[14px] font-semibold">Project1</li>
              <li className="text-[12px] text-slate-400">3 tasks</li>
            </ul>
          </li>
          <hr className="w-[80%[ mx-auto text-white opacity-50"></hr>

          <li className="p-3 flex gap-2 items-center">
            <div className="flex-center w-8 h-8 bg-backgroundImage-purpleGradient rounded-md">
              <CircleIcon />
            </div>
            <ul>
              <li className="text-[14px] font-semibold">Project1</li>
              <li className="text-[12px] text-slate-400">3 tasks</li>
            </ul>
          </li>
          <hr className="w-[80%[ mx-auto text-white opacity-50"></hr>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
