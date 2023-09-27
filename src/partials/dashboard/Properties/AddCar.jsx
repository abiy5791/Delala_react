import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "../../../components/CircularProgress";
import axios from "../../../api/axios";
import useAuthContext from "../../../context/AuthContext";

const AddCar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const [CarDetails, setCarDetails] = useState({
    title: "",
    make: "",
    delala_id: user.id,
    model: "",
    year: "",
    mileage: "",
    fueltype: "",
    color: "",
    price: "",
    details: "",
  });

  function handlechange(e) {
    if (e.target.type === "file") {
      const selectedFile = e.target.files;
      setImage(selectedFile);
    } else {
      setCarDetails((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const add_new_car = async (event) => {
    event.preventDefault();

    setErrors([]);
    setIsLoading(true);

    try {
      const formData = new FormData();
      // Append fields to formData
      formData.append("title", CarDetails.title);
      formData.append("make", CarDetails.make);
      formData.append("model", CarDetails.model);
      formData.append("delala_id", CarDetails.delala_id);
      formData.append("year", CarDetails.year);
      formData.append("mileage", CarDetails.mileage);
      formData.append("fueltype", CarDetails.fueltype);
      formData.append("color", CarDetails.color);
      formData.append("price", CarDetails.price);
      formData.append("details", CarDetails.details);
      // formData.append("image[]", image);
      for (let i = 0; i < image.length; i++) {
        formData.append("image[]", image[i]);
      }

      // for (const value of formData.values()) {
      //   console.log(typeof value);
      // }

      await axios.post("api/car", formData).then(function (response) {
        console.log(response);
      });

      navigate(-1);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="p-10">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase decoration-wavy">
              Car Register Form
            </h1>
            <form
              className="mt-6"
              onSubmit={add_new_car}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={CarDetails.title}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Title"
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
                  <span className="text-gray-700">Make</span>
                  <input
                    type="text"
                    name="make"
                    onChange={handlechange}
                    value={CarDetails.make}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Make"
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
                  <span className="text-gray-700">Model</span>
                  <input
                    type="text"
                    name="model"
                    onChange={handlechange}
                    value={CarDetails.model}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Model"
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
                  <span className="text-gray-700">Year</span>
                  <input
                    type="text"
                    name="year"
                    onChange={handlechange}
                    value={CarDetails.year}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Year"
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
                  <span className="text-gray-700">Mileage</span>
                  <input
                    type="text"
                    name="mileage"
                    onChange={handlechange}
                    value={CarDetails.mileage}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Mileage"
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
                  <span className="text-gray-700">FuelType</span>
                  <input
                    type="text"
                    name="fueltype"
                    onChange={handlechange}
                    value={CarDetails.fueltype}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Fueltype"
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
                  <span className="text-gray-700">Car Color</span>
                  <input
                    type="text"
                    name="color"
                    onChange={handlechange}
                    value={CarDetails.color}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Car Color"
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
                  <span className="text-gray-700">Price</span>
                  <input
                    type="number"
                    name="price"
                    onChange={handlechange}
                    value={CarDetails.price}
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Price"
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
                  <span className="text-gray-700">Car Images</span>
                  <input
                    type="file"
                    name="image"
                    onChange={handlechange}
                    multiple
                    className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
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
                  <span class="text-gray-700">Other Details</span>
                  <textarea
                    name="details"
                    onChange={handlechange}
                    value={CarDetails.details}
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddCar;
