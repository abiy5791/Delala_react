import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../../../components/CircularProgress";
import axios from "../../../api/axios";
import useAuthContext from "../../../context/AuthContext";
import validate from "../../../Validation/ValidateProperty";

const AddOthers = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState([]);
  const [OthersDetail, setOthersDetail] = useState({
    title: "",
    delala_id: user.id,
    price: "",
    details: "",
  });

  const InitialErrors = {
    title: "",
    price: "",
    details: "",
    image: "",
  };
  const [valErr, setValErr] = useState(InitialErrors);
  const [enable, setEnable] = useState(true);

  function handlechange(e) {
    setValErr((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: "",
    }));
    setEnable(true);
    if (e.target.type === "file") {
      const selectedFile = e.target.files;
      setImage(selectedFile);
    } else {
      setOthersDetail((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const Add_New_Other = async (event) => {
    event.preventDefault();
    const err = validate(OthersDetail, image);
    setValErr(err);
    if (Object.keys(err).length > 0) {
      setEnable(false);
    } else {
      setErrors([]);
      setIsLoading(true);

      try {
        const formData = new FormData();
        // Append fields to formData
        formData.append("title", OthersDetail.title);
        formData.append("price", OthersDetail.price);
        formData.append("delala_id", OthersDetail.delala_id);
        formData.append("details", OthersDetail.details);
        for (let i = 0; i < image.length; i++) {
          formData.append("image[]", image[i]);
        }

        await axios.post("api/other", formData).then(function (response) {
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
    }
  };

  return (
    <main>
      <div className="p-10">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase decoration-wavy">
              Other Register Form
            </h1>
            <form
              className="mt-6"
              onSubmit={Add_New_Other}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={OthersDetail.title}
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
                {valErr.title && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.title}
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
                    value={OthersDetail.price}
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
                {valErr.price && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.price}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Other Images</span>
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
                {valErr.image && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.image}
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
                    value={OthersDetail.details}
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
                {valErr.details && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.details}
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
                    className={`
              w-full
              px-4
              py-3
              rounded-md
              text-white
              ${
                enable
                  ? " bg-indigo-500 hover:bg-indigo-700"
                  : "cursor-not-allowed disabled bg-gray-600"
              }
            `}
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

export default AddOthers;
