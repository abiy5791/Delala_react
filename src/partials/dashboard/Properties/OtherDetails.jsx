import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import useAuthContext from "../../../context/AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";

const OthersDetail = () => {
  const [OthersData, setOthersData] = useState({});
  const param = useParams();
  const navigate = useNavigate();
  const [approval, setApproval] = useState({ approval: 0 });
  const { user } = useAuthContext();

  const getOthersData = async () => {
    try {
      const response = await axios.get(`api/other/${param.id}`);
      setOthersData(response.data);
      if (response.data.approval === 0) {
        setApproval({ approval: 1 });
      } else {
        setApproval({ approval: 0 });
      }
    } catch (error) {
      console.error("Failed to fetch labour data:", error);
    }
  };

  useEffect(() => {
    getOthersData();
  }, []);

  const deleteothers = async () => {
    await axios.delete(`api/other/${param.id}`).then((response) => {
      navigate("/admin_dashboard/others");
    });
  };

  const update_others = async (id) => {
    await axios.put(`api/other/${id}`, approval).then((response) => {
      navigate("/admin_dashboard/others");
    });
  };
  return (
    <main>
      <div className="p-10">
        <div className="bg-white p-3 border-t-4 border-blue-300">
          <div className="image overflow-hidden">
            <img
              className="h-auto w-full mx-auto"
              src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
              alt=""
            ></img>
          </div>

          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
            {OthersData.title}
          </h1>
          <h3 className="text-gray-600 font-lg text-semibold leading-6">
            {OthersData.price}
          </h3>
          <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
            {OthersData.details}
          </p>
          <div className="flex flex-wrap -mx-2 mb-4">
            {OthersData.image &&
              OthersData.image.split("|").map((imageUrl, imageIndex) => (
                <div
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4"
                  key={imageIndex}
                >
                  <img
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                    src={`http://127.0.0.1:8000/${imageUrl}`}
                    alt={`OthersData Image ${imageIndex}`}
                  />
                </div>
              ))}
          </div>
          <p className="text-gray-600 mb-2">
            Posted by: {user.id === OthersData.delala_id && user.name}
          </p>
          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
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
          </ul>
        </div>

        <div className="bg-white p-3 shadow-sm rounded-sm">
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
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">{OthersData.title}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Doe</div>
              </div>
              <div className="grid grid-cols-2">
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
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a className="text-blue-800" href="mailto:jane@example.com">
                    {OthersData.price}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
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
                    onClick={() => deleteothers()}
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

export default OthersDetail;
