import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import CircularProgress from "../components/CircularProgress";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { register, errors, isLoading } = useAuthContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation, role });
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px] dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
              dark:bg-gray-900 dark:text-white
            relative
            mx-auto
            max-w-[525px]
            overflow-hidden
            rounded-lg
            bg-white
            py-16
            px-10
            text-center
            sm:px-12
            md:px-[60px]
          "
            >
              <div className="mb-10 text-center md:mb-5">
                <h1 className="text-3xl font-bold">Register</h1>
              </div>
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                  bordder-[#E9EDF4]
                  w-full
                  rounded-md
                  border
                  bg-[#FCFDFE]
                  py-3
                  px-5
                  text-base text-body-color
                  placeholder-[#ACB6BE]
                  outline-none
                  focus:border-primary
                  focus-visible:shadow-none
                "
                  />
                  {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                  bordder-[#E9EDF4]
                  w-full
                  rounded-md
                  border
                  bg-[#FCFDFE]
                  py-3
                  px-5
                  text-base text-body-color
                  placeholder-[#ACB6BE]
                  outline-none
                  focus:border-primary
                  focus-visible:shadow-none
                "
                  />
                  {errors.email && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.email[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                  bordder-[#E9EDF4]
                  w-full
                  rounded-md
                  border
                  bg-[#FCFDFE]
                  py-3
                  px-5
                  text-base text-body-color
                  placeholder-[#ACB6BE]
                  outline-none
                  focus:border-primary
                  focus-visible:shadow-none
                "
                  />
                  <button
                    type="button"
                    className="absolute top-6 right-3 transform -translate-y-1/2 text-primary focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                  {errors.password && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.password[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password Confirmation"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    className="
                  bordder-[#E9EDF4]
                  w-full
                  rounded-md
                  border
                  bg-[#FCFDFE]
                  py-3
                  px-5
                  text-base text-body-color
                  placeholder-[#ACB6BE]
                  outline-none
                  focus:border-primary
                  focus-visible:shadow-none
                "
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Role:
                  </label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                    >
                      <option value="" disabled defaultValue>
                        Select an option
                      </option>

                      <option value="delala">Delala</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      {/* <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg> */}
                    </div>
                  </div>
                  {errors.role && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.role[0]}
                      </span>
                    </div>
                  )}
                </div>
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

              <p className="text-base text-[#adadad]">
                Already have an account ?
                <Link to="/login" className="text-primary hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
