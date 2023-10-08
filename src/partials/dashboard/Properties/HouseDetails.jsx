import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import useAuthContext from "../../../context/AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";

const HouseDetails = () => {
  const [HouseData, seHouseData] = useState({});
  const param = useParams();
  const navigate = useNavigate();
  const [approval, setApproval] = useState({ approval: 0 });
  const { user } = useAuthContext();

  const getHouseData = async () => {
    try {
      const response = await axios.get(`api/house/${param.id}`);
      seHouseData(response.data);
      setApproval({ approval: response.data.approval });
    } catch (error) {
      console.error("Failed to fetch house data:", error);
    }
  };

  useEffect(() => {
    getHouseData();
  }, []);

  const createdDate = new Date(HouseData.created_at);

  // Format the date
  const formattedDate = createdDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",

    hour12: true,
  });
  const deletehouse = async () => {
    await axios.delete(`api/house/${param.id}`).then((response) => {
      navigate(-1);
    });
  };

  const update_house = async (id) => {
    const approved = approval.approval === 0 ? 1 : 0;
    await axios
      .put(`api/house/${id}`, { approval: approved })
      .then((response) => {
        setApproval({ approval: approved });
      });
  };
  return (
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
            {HouseData.title}
          </h1>

          <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 dark:text-slate-100">
            {HouseData.details}
          </p>
          <div className="flex flex-wrap -mx-2 mb-4 dark:bg-slate-800">
            {HouseData.image &&
              HouseData.image.split("|").map((imageUrl, imageIndex) => (
                <div
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                  key={imageIndex}
                >
                  <img
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                    src={`http://localhost:8000/${imageUrl}`}
                    alt={`HouseData Image ${imageIndex}`}
                  />
                </div>
              ))}
          </div>
          <p className="text-gray-600 mb-2 dark:text-slate-100">
            Posted by: {user.id === HouseData.delala_id && user.name}
          </p>
          <ul className="bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-100 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
              <span>Approval</span>
              <span className="ml-auto">
                {approval.approval ? (
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
              <span>Posted at:</span>
              <span className="ml-auto">{formattedDate}</span>
            </li>
          </ul>
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
                <div className="px-4 py-2">{HouseData.area}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Location</div>
                <div className="px-4 py-2">{HouseData.location}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Type</div>
                <div className="px-4 py-2">{HouseData.type}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Status</div>
                <div className="px-4 py-2">{HouseData.status}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Price</div>
                <div className="px-4 py-2">{HouseData.price} Birr</div>
              </div>

              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Bathrooms</div>
                <div className="px-4 py-2">{HouseData.bathrooms} Bathrooms</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Bedrooms</div>
                <div className="px-4 py-2">{HouseData.bedrooms} Bedrooms</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Parking</div>
                <div className="px-4 py-2">
                  {HouseData.parking} Car can park
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex">
            <Link to={`update`}>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-sm hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit
              </button>
            </Link>

            <button
              onClick={() => window.my_modal_5.showModal()}
              className="block w-full text-red-800 text-sm font-semibold rounded-sm hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Delete
            </button>
            {/* Open the modal using ID.showModal() method */}

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Delete!</h3>
                <p className="py-4">are you sure you want to delete?</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                  <button
                    onClick={() => deletehouse()}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HouseDetails;
