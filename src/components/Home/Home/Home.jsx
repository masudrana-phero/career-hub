import React from "react";
import Jobs from "../../Jobs/Jobs";
import Cover from "../Cover/Cover";
import Category from "../Category/Category";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Category></Category>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
