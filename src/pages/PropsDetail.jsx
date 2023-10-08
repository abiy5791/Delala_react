import React, { useEffect, useState } from "react";
import axios from "../api/axios";

import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PropsDetail = ({ show }) => {
  const [propsdata, setPropsData] = useState({});
  const param = useParams();
  if (param.model_type === "car") {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/car/${param.id}`);
        setPropsData(response.data);
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
        {show && <Header />}
        <main>
          <div className="p-10">
            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                ></img>
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {propsdata.title}
              </h1>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {propsdata.details}
              </p>
              <div className="flex flex-wrap -mx-2 mb-4">
                {propsdata.image &&
                  propsdata.image.split("|").map((imageUrl, imageIndex) => (
                    <div
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                      key={imageIndex}
                    >
                      <img
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                        src={`http://localhost:8000/${imageUrl}`}
                        alt={`propsdata Image ${imageIndex}`}
                      />
                    </div>
                  ))}
              </div>
              <p className="text-gray-600 mb-2">
                {/* Posted by: {user.id === propsdata.delala_id && user.name} */}
              </p>
              {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Approval</span>
                <span className="ml-auto">
                  {carData.approval ? (
                    <button
                      onClick={() => update_car(carData.id)}
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => update_car(carData.id)}
                      className="bg-red-400 py-1 px-2 rounded text-white text-sm"
                    >
                      pending...
                    </button>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Year</span>
                <span className="ml-auto">{carData.year}</span>
              </li>
            </ul> */}
            </div>

            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Make</div>
                    <div className="px-4 py-2">{propsdata.make}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Model</div>
                    <div className="px-4 py-2">{propsdata.model}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Year</div>
                    <div className="px-4 py-2">{propsdata.year}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Color</div>
                    <div className="px-4 py-2">{propsdata.color}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Mileage</div>
                    <div className="px-4 py-2">{propsdata.mileage}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">FuleType</div>
                    <div className="px-4 py-2">{propsdata.fueltype}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Price</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {propsdata.price} Birr
                      </a>
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        {show && <Footer />}
      </>
    );
  }
  if (param.model_type === "house") {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/house/${param.id}`);
        setPropsData(response.data);
      } catch (error) {
        console.error("Failed to fetch house data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
        {show && <Header />}
        <main>
          <div className="p-10">
            <div className="bg-white p-3 border-t-4 border-blue-300 dark:bg-slate-800">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                ></img>
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 dark:text-slate-100">
                {propsdata.title}
              </h1>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 dark:text-slate-100">
                {propsdata.details}
              </p>
              <div className="flex flex-wrap -mx-2 mb-4 dark:bg-slate-800">
                {propsdata.image &&
                  propsdata.image.split("|").map((imageUrl, imageIndex) => (
                    <div
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                      key={imageIndex}
                    >
                      <img
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                        src={`http://localhost:8000/${imageUrl}`}
                        alt={`propsdata Image ${imageIndex}`}
                      />
                    </div>
                  ))}
              </div>
              <p className="text-gray-600 mb-2 dark:text-slate-100">
                {/* Posted by: {user.id === propsdata.delala_id && user.name} */}
              </p>
              {/* <ul className="bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-100 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Approval</span>
                <span className="ml-auto">
                  {HouseData.approval ? (
                    <button
                      onClick={() => update_house(HouseData.id)}
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => update_house(HouseData.id)}
                      className="bg-red-400 py-1 px-2 rounded text-white text-sm"
                    >
                      pending...
                    </button>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>location</span>
                <span className="ml-auto">{HouseData.location}</span>
              </li>
            </ul> */}
            </div>

            <div className="bg-white p-3 shadow-sm rounded-sm dark:bg-slate-800">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide dark:text-slate-100">About</span>
              </div>
              <div className="text-gray-700 dark:text-slate-100">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Area</div>
                    <div className="px-4 py-2">{propsdata.area}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Location</div>
                    <div className="px-4 py-2">{propsdata.location}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Type</div>
                    <div className="px-4 py-2 uppercase">{propsdata.type}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Status</div>
                    <div className="px-4 py-2">{propsdata.status}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Price</div>
                    <div className="px-4 py-2 font-bold">
                      {propsdata.price} Birr
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Number Of Bedrooms
                    </div>
                    <div className="px-4 py-2">{propsdata.bedrooms} Bed</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Number Of Bathrooms
                    </div>
                    <div className="px-4 py-2">
                      {propsdata.bathrooms} Bathrooms
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Parking</div>
                    <div className="px-4 py-2">
                      {propsdata.parking} car can park
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {show && <Footer />}
      </>
    );
  }

  if (param.model_type === "other") {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/other/${param.id}`);
        setPropsData(response.data);
      } catch (error) {
        console.error("Failed to fetch other data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
        {show && <Header />}
        <main>
          <div className="p-10">
            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                ></img>
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {propsdata.title}
              </h1>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {propsdata.details}
              </p>
              <div className="flex flex-wrap -mx-2 mb-4">
                {propsdata.image &&
                  propsdata.image.split("|").map((imageUrl, imageIndex) => (
                    <div
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                      key={imageIndex}
                    >
                      <img
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                        src={`http://localhost:8000/${imageUrl}`}
                        alt={`propsdata Image ${imageIndex}`}
                      />
                    </div>
                  ))}
              </div>
              <p className="text-gray-600 mb-2">
                {/* Posted by: {user.id === OthersData.delala_id && user.name} */}
              </p>
              {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Approval</span>
                <span className="ml-auto">
                  {OthersData.approval ? (
                    <button
                      onClick={() => update_others(OthersData.id)}
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => update_others(OthersData.id)}
                      className="bg-red-400 py-1 px-2 rounded text-white text-sm"
                    >
                      pending...
                    </button>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>location</span>
                <span className="ml-auto">location</span>
              </li>
            </ul> */}
            </div>

            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Price</div>
                    <div className="px-4 py-2">{propsdata.price} Birr</div>
                  </div>
                  {/* <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">Doe</div>
                </div> */}
                  {/* <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">Female</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Permanant Address
                  </div>
                  <div className="px-4 py-2">
                    Arlington Heights, IL, Illinois
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      {propsdata.price}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        {show && <Footer />}
      </>
    );
  }
  if (param.model_type === "labour") {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/labour/${param.id}`);
        setPropsData(response.data);
      } catch (error) {
        console.error("Failed to fetch labour data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        {show && <Header />}
        <main>
          <div className="p-10">
            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                ></img>
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {propsdata.title}
              </h1>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {propsdata.details}
              </p>
              <div className="flex flex-wrap -mx-2 mb-4">
                {propsdata.image &&
                  propsdata.image.split("|").map((imageUrl, imageIndex) => (
                    <div
                      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                      key={imageIndex}
                    >
                      <img
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                        src={`http://localhost:8000/${imageUrl}`}
                        alt={`propsdata Image ${imageIndex}`}
                      />
                    </div>
                  ))}
              </div>
              <p className="text-gray-600 mb-2">
                {/* Posted by: {user.id === propsdata.delala_id && user.name} */}
              </p>
              {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Approval</span>
                <span className="ml-auto">
                  {LabourData.approval ? (
                    <button
                      onClick={() => update_labour(LabourData.id)}
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => update_labour(LabourData.id)}
                      className="bg-red-400 py-1 px-2 rounded text-white text-sm"
                    >
                      pending...
                    </button>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>location</span>
                <span className="ml-auto">{LabourData.location}</span>
              </li>
            </ul> */}
            </div>

            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{propsdata.name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Salary</div>
                    <div className="px-4 py-2">{propsdata.salary} Birr </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{propsdata.Gender}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Skills</div>
                    <div className="px-4 py-2">{propsdata.skills}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Age</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {propsdata.age}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {show && <Footer />}
      </>
    );
  }
};

export default PropsDetail;
