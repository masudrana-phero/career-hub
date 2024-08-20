import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <div className=" flex items-center h-96 justify-center">
        <div>
          <h2 className="text-6xl text-red-700 mb-5">Ops !</h2>
          <p className="text-2xl text-red-300">Page Not Found !</p>
        </div>
      </div>
      <Link className="btn btn-outline mb-10" to="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
