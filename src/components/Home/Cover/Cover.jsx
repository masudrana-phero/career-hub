import React from "react";
import { Link } from "react-router-dom";

import user from "../../../assets/images/user.png";

const Cover = () => {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="flex justify-center items-center h-auto">
        <div className="">
          <div className="text-5xl">
            <h2 className="my-2 font-semibold">One Step</h2>
            <h2 className="my-2 font-semibold">Closer To Your</h2>
            <h2 className="my-2 font-semibold text-blue-500"> Dream Job</h2>
          </div>
          <p className="text-2xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link>
            <button className="btn btn-outline mt-5 text-blue-500 font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* image section start here  */}

      <div className="sm:text-center">
        <img className="max-w-3xl h-[600px]" src={user} alt="" />
      </div>
    </div>
  );
};

export default Cover;
