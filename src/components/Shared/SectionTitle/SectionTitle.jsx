import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold">{title}</h2>
      <h2 className="text-1xl mt-3 ">{subTitle}</h2>
    </div>
  );
};

export default SectionTitle;
