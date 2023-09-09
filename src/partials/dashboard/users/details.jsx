import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import axios from "../../../api/axios";

export default function Detail() {
  const params = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState({ status: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getUser = async () => {
    await axios.get(`api/users/${params.id}`).then((response) => {
      setUser(response.data);
      if (response.data.status === 0) {
        setStatus({ status: 1 });
      } else {
        setStatus({ status: 0 });
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`api/users/${params.id}`).then((response) => {
      navigate("/admin_dashboard/users");
    });
  };

  const update_user = async (id) => {
    await axios.put(`api/users/${id}`, status).then((response) => {
      navigate("/admin_dashboard/users");
      console.log(response.data);
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
                {user.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {user.email}
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    {user.status ? (
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
                  <span className="ml-auto">{user.created_at}</span>
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
                    <div className="px-4 py-2">+11 998001001</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      Beech Creek, PA, Pennsylvania
                    </div>
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
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {user.email}
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
                <Link to={`/Update_user/${user.id}`}>
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
      </div>
    </div>
  );
}
