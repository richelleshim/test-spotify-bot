import React from "react";

const HeaderBoxTemplate = ({ title, subtitle }: HeaderBoxTemplateProps) => {
  return (
    <div className="flex flex-col gap-1 bg-backgroundImage-purpleGradient">
      <h1 className="text-24 lg:text-30 font-semibold;">{title}</h1>
      <p className="text-14 lg:text-16 font-normal text-gray-400">{subtitle}</p>
    </div>
  );
};

export default HeaderBoxTemplate;
