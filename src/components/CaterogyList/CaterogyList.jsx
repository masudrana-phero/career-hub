import React from "react";

const CaterogyList = ({ jobList }) => {
  const { logo, category_name, availability } = jobList;
  return (
    <div className="mr-3 border-2 bg-slate-100 px-5 py-2 rounded">
      <img src={logo} alt="" />
      <h2 className="font-bold my-4">{jobList.category_name}</h2>
      <p>{availability}</p>
    </div>
  );
};

export default CaterogyList;
