import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

export default function Detail() {
  const params = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState({ status: 0 });
  const getUser = async () => {
    await axios.get(`api/users/${params.id}`).then((response) => {
      setUser(response.data);
      setStatus({ status: response.data.status });
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const createdDate = new Date(user.created_at);

  // Format the date
  const formattedDate = createdDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",

    hour12: true,
  });

  const deleteUser = async (id) => {
    await axios.delete(`api/users/${params.id}`).then((response) => {
      navigate("/admin_dashboard/users");
    });
  };

  const update_user = async (id) => {
    const approved = status.status === 0 ? 1 : 0;
    await axios
      .put(`api/users/${id}`, { status: approved })
      .then((response) => {
        setStatus({ status: approved });
      });
  };

  return (
    <main>
      <div className="p-10">
        <div className="bg-white p-3 border-t-4 border-blue-300">
          <div className="image overflow-hidden">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-4 flex">
              <img
                className="h-auto w-full mx-2"
                src={`http://127.0.0.1:8000/${user.avatar}`}
                alt=""
              />
              <img
                className="h-auto w-full mx-3"
                src={`http://127.0.0.1:8000/${user.kebelleId}`}
                alt=""
              />
            </div>
          </div>

          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
            {user.name}
          </h1>
          <a href={`mailto:${user.email}`}>
            <h3
              className="text-gray-600 font-lg text-semibold leading-6"
              style={{ color: "blue" }}
            >
              {user.email}
            </h3>
          </a>
          <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt
          </p>
          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
              <span>Status</span>
              <span className="ml-auto">
                {status.status ? (
                  <button
                    onClick={() => update_user(user.id)}
                    className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                  >
                    Active
                  </button>
                ) : (
                  <button
                    onClick={() => update_user(user.id)}
                    className="bg-red-400 py-1 px-2 rounded text-white text-sm"
                  >
                    pending...
                  </button>
                )}
              </span>
            </li>
            <li className="flex items-center py-3">
              <span>Member since</span>
              <span className="ml-auto">{formattedDate}</span>
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
                <div className="px-4 py-2">{user.name}</div>
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
                <div className="px-4 py-2">{user.phone}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">{user.address}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">{user.address}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a href={`mailto:${user.email}`}>
                    <h3
                      className="text-gray-600 font-lg text-semibold leading-6"
                      style={{ color: "blue" }}
                    >
                      {user.email}
                    </h3>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Member Since</div>
                <div className="px-4 py-2">{formattedDate}</div>
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
                    onClick={() => deleteUser()}
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
}
