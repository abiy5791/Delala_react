import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import CircularProgress from "../components/CircularProgress";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { register, errors, isLoading } = useAuthContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation });
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
