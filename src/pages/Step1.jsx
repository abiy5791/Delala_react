import React, { useState } from "react";

const Step1 = ({ handlechange, userDetail }) => {
  return (
    <div>
      <form action="" encType="multipart/form-data">
        <div class="mb-5 text-center">
          <div class="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
            <img id="image" class="object-cover w-full h-32 rounded-full" />
          </div>

          <label
            for="fileInput"
            type="button"
            class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Browse Photo
          </label>

          <div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
            Click to add profile picture
          </div>

          <input
            name="avatar"
            id="fileInput"
            // accept="image/*"
            class="hidden"
            type="file"
            onChange={(e) => handlechange(e)}
          />
        </div>

        <div class="mb-5">
          <label for="firstname" class="font-bold mb-1 text-gray-700 block">
            Firstname
          </label>
          <input
            type="text"
            class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Enter your firstname..."
            onChange={(e) => handlechange(e)}
            value={userDetail.name}
            name="name"
          />
        </div>

        <div class="mb-5">
          <label for="email" class="font-bold mb-1 text-gray-700 block">
            Email
          </label>
          <input
            type="email"
            class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Enter your email address..."
            value={userDetail.email}
            onChange={(e) => handlechange(e)}
            name="email"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
