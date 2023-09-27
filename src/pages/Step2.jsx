import React from "react";

const Step2 = ({ handlechange, userDetail }) => {
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
              type="password"
              class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium mb-5"
              placeholder="Your strong password..."
              name="password"
              onChange={(e) => handlechange(e)}
              value={userDetail.password}
            />
            <input
              type="password"
              class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="Confirm Your Password"
              name="password_confirmation"
              onChange={(e) => handlechange(e)}
              value={userDetail.password_confirmation}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
