import React, { useState, useEffect } from "react";
import {} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import CircularProgress from "../../../components/CircularProgress";
export default function UpdateOthers() {
  const [otherinfo, setOtherinfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/other/${params.id}`)
      .then((response) => setOtherinfo(response.data));
  }, []);

  function handlechange(e) {
    if (e.target.type === "file") {
      const selectedFile = e.target.files;
      setImage(selectedFile);
    } else {
      setOtherinfo((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }
  const update_other = async (event) => {
    event.preventDefault();

    setErrors([]);
    setIsLoading(true);

    try {
      const formData = new FormData();
      // Append fields to formData
      formData.append("title", otherinfo.title);
      formData.append("price", otherinfo.price);
      formData.append("delala_id", otherinfo.delala_id);
      formData.append("details", otherinfo.details);
      formData.append("_method", "put");

      if (image !== null) {
        for (let i = 0; i < image.length; i++) {
          formData.append("image[]", image[i]);
        }
      }

      await axios.post(`api/other/${params.id}`, formData).then((response) => {
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
              Other Update Form
            </h1>
            <form
              className="mt-6"
              onSubmit={update_other}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={otherinfo.title}
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
                  <span className="text-gray-700">Price</span>
                  <input
                    type="number"
                    name="price"
                    onChange={handlechange}
                    value={otherinfo.price}
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
                    value={otherinfo.details}
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
