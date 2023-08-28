import React from "react";
import { ClockIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Approval = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/">
        <div className="text-center">
          <ClockIcon className="w-32 h-32 mx-auto text-blue-400" />
          <div className="text-4xl mt-4">
            Please Be Patient & Wait For Approval!
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Approval;
