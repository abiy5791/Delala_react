import React from "react";
import { ClockIcon, FilterIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Approval = () => {
  return (
    <div className="flex items-center justify-center ">
      <div class="bg-white rounded-lg p-10 flex items-center shadow justify-between">
        <div>
          
          <svg
            class="mb-4 h-20 w-20 text-green-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>

          <h2 class="text-2xl mb-4 text-gray-800 text-center font-bold">
            Registration Success
          </h2>

          <div className="text-2xl mt-4 text-center">
            Thank you. Please Be Patient & Wait For Approval! We will notify you
            with your Phone number.
          </div>
          <Link to="/">
            <button class="w-40 block mx-auto my-6 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Approval;
