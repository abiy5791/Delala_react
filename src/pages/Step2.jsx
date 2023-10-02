import React, { useState } from "react";

const Step2 = ({ handlechange, userDetail, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form action="">
        <div class="mb-5">
          <label for="password" class="font-bold mb-1 text-gray-700 block">
            Set up password
          </label>
          <div class="text-gray-600 mt-2 mb-4">
            Please create a secure password including the following criteria
            below.
            <ul class="list-disc text-sm ml-4 mt-2">
              <li>lowercase letters</li>
              <li>numbers</li>
              <li>capital letters</li>
              <li>special characters</li>
            </ul>
          </div>

          <div class="relative">
            <input
              type={showPassword ? "text" : "password"}
              class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium mb-5"
              placeholder="Your strong password..."
              name="password"
              onChange={(e) => handlechange(e)}
              value={userDetail.password}
            />
            <button
              type="button"
              className="absolute top-6 right-3 transform -translate-y-1/2 text-primary focus:outline-none"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors && errors.password && (
              <div className="flex">
                <span className="text-red-500 text-sm font-bold m-2 p-2">
                  {errors.password}
                </span>
              </div>
            )}
            <input
              type={showPassword ? "text" : "password"}
              class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="Confirm Your Password"
              name="password_confirmation"
              onChange={(e) => handlechange(e)}
              value={userDetail.password_confirmation}
            />
            <button
              type="button"
              className="absolute top-6 right-3 transform -translate-y-1/2 text-primary focus:outline-none"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors && errors.password_confirmation && (
              <div className="flex">
                <span className="text-red-500 text-sm font-bold m-2 p-2">
                  {errors.password_confirmation}
                </span>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
