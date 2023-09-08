import React from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../context/AuthContext";
import CircularProgress from "../../../components/CircularProgress";

const Addusers = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userinfo, setUserinfo] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    role: "delala",
  });

  const { Userregister, errors, isLoading } = useAuthContext();

  function handlechange(e) {
    setUserinfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
  }
  const add_user = async (event) => {
    event.preventDefault();
    console.log("heasfskjd");
    Userregister(userinfo);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="p-10">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
              <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase decoration-wavy">
                  Register Form
                </h1>
                <form className="mt-6" onSubmit={add_user}>
                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">Your name</span>
                      <input
                        type="text"
                        name="name"
                        onChange={handlechange}
                        value={userinfo.name}
                        className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                        placeholder="Name"
                      />
                    </label>
                    {errors.name && (
                      <div className="flex">
                        <span className="text-red-400 text-sm m-2 p-2">
                          {errors.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">password</span>
                      <input
                        type="password"
                        name="password"
                        onChange={handlechange}
                        value={userinfo.password}
                        className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                        placeholder="password"
                      />
                    </label>
                    {errors.password && (
                      <div className="flex">
                        <span className="text-red-400 text-sm m-2 p-2">
                          {errors.password[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">confirm password</span>
                      <input
                        type="password"
                        name="password_confirmation"
                        value={userinfo.password_confirmation}
                        onChange={handlechange}
                        className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                        placeholder="confirm password"
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">Email address</span>
                      <input
                        name="email"
                        type="email"
                        value={userinfo.email}
                        onChange={handlechange}
                        className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                        placeholder="john.cooks@example.com"
                        required
                      />
                    </label>
                    {errors.email && (
                      <div className="flex">
                        <span className="text-red-400 text-sm m-2 p-2">
                          {errors.email[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* <div className="mb-2">
                    <label>
                      <span class="text-gray-700">Message</span>
                      <textarea
                        name="message"
                        className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                        rows="5"
                      ></textarea>
                    </label>
                  </div> */}

                  <div className="mb-10">
                    {isLoading ? (
                      <div className="flex justify-center">
                        <CircularProgress />
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="
                  w-full
                  px-4
                  py-3
                  bg-indigo-500
                  hover:bg-indigo-700
                  rounded-md
                  text-white
                "
                      >
                        Register
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Addusers;
