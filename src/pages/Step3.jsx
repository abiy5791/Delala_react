import React from "react";

const Step3 = ({ handlechange, userDetail, errors }) => {
  return (
    <div>
      <form action="" encType="multipart/form-data">
        <div class="mb-5">
          <label for="profession" class="font-bold mb-1 text-gray-700 block">
            Address
          </label>
          <input
            type="text"
            class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="eg. Adama"
            name="address"
            onChange={(e) => handlechange(e)}
            value={userDetail.address}
          />
          {errors && errors.address && (
            <div className="flex">
              <span className="text-red-500 text-sm font-bold m-2 p-2">
                {errors.address}
              </span>
            </div>
          )}
        </div>
        <div class="mb-5">
          <label for="profession" class="font-bold mb-1 text-gray-700 block">
            Phone
          </label>
          <input
            type="text"
            class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="eg. 0933559988"
            name="phone"
            onChange={(e) => handlechange(e)}
            value={userDetail.phone}
          />
          {errors && errors.phone && (
            <div className="flex">
              <span className="text-red-500 text-sm font-bold m-2 p-2">
                {errors.phone}
              </span>
            </div>
          )}
        </div>
        <div class="mb-5">
          <label for="profession" class="font-bold mb-1 text-gray-700 block">
            Kebelle Id
          </label>
          <input
            type="file"
            class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            name="kebelleId"
            onChange={(e) => handlechange(e)}
          />
          {errors && errors.kebelleId && (
            <div className="flex">
              <span className="text-red-500 text-sm font-bold m-2 p-2">
                {errors.kebelleId}
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step3;
