import React, { useState, useEffect } from "react";
import {} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import CircularProgress from "../../../components/CircularProgress";
export default function UpdateCars() {
  const [carinfos, setCarinfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/car/${params.id}`)
      .then((response) => setCarinfos(response.data));
  }, []);

  function handlechange(e) {
    if (e.target.type === "file") {
      const selectedFile = e.target.files;
      setImage(selectedFile);
    } else {
      setCarinfos((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const update_car = async (event) => {
    event.preventDefault();

    setErrors([]);
    setIsLoading(true);

    try {
      const formData = new FormData();
      // Append fields to formData
      formData.append("title", carinfos.title);
      formData.append("make", carinfos.make);
      formData.append("model", carinfos.model);
      formData.append("year", carinfos.year);
      formData.append("mileage", carinfos.mileage);
      formData.append("fueltype", carinfos.fueltype);
      formData.append("color", carinfos.color);
      formData.append("price", carinfos.price);
      formData.append("details", carinfos.details);
      formData.append("_method", "put");

      if (image !== null) {
        for (let i = 0; i < image.length; i++) {
          formData.append("image[]", image[i]);
        }
      }

      await axios.post(`api/car/${params.id}`, formData).then(() => {
        navigate(-1);
      });
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
              update cars
            </h1>
            <form
              className="mt-6"
              onSubmit={update_car}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={carinfos.title}
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
                    value={carinfos.make}
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
                    value={carinfos.model}
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
                    value={carinfos.year}
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
                    value={carinfos.mileage}
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
                    value={carinfos.fueltype}
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
                    value={carinfos.color}
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
                    value={carinfos.price}
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
                    value={carinfos.details}
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
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
