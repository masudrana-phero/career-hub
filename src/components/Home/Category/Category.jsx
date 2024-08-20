import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CaterogyList from "../../CaterogyList/CaterogyList";

const Category = () => {
  const title = "Job Category List";
  const subTitle =
    "Explore thousands of job opportunities with all the information you need. Its your future";

  const [jobCategoris, setJobCategoris] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategoris(data));
  }, []);

  return (
    <div>
      <SectionTitle title={title} subTitle={subTitle}></SectionTitle>

      <div className="grid md:grid-cols-4 mt-8">
        {jobCategoris.map((jobList) => (
          <CaterogyList jobList={jobList}></CaterogyList>
        ))}
      </div>
    </div>
  );
};

export default Category;
