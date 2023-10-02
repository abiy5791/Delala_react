import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../../../components/CircularProgress";
import axios from "../../../api/axios";
import useAuthContext from "../../../context/AuthContext";
import validate from "../../../Validation/ValidateProperty";

const AddLabour = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState([]);
  const [LabourDetails, setLabourDetails] = useState({
    title: "",
    delala_id: user.id,
    name: "",
    skills: "",
    type: "",
    salary: "",
    details: "",
    Gender: "",
    age: "",
  });

  const InitialErrors = {
    title: "",
    name: "",
    skills: "",
    type: "",
    salary: "",
    details: "",
    Gender: "",
    age: "",
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
      setLabourDetails((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const Add_New_Labour = async (event) => {
    event.preventDefault();
    const err = validate(LabourDetails, image);
    setValErr(err);
    if (Object.keys(err).length > 0) {
      setEnable(false);
    } else {
      setErrors([]);
      setIsLoading(true);

      try {
        const formData = new FormData();
        // Append fields to formData
        formData.append("title", LabourDetails.title);
        formData.append("name", LabourDetails.name);
        formData.append("skills", LabourDetails.skills);
        formData.append("delala_id", LabourDetails.delala_id);
        formData.append("type", LabourDetails.type);
        formData.append("salary", LabourDetails.salary);
        formData.append("details", LabourDetails.details);
        formData.append("Gender", LabourDetails.Gender);
        formData.append("age", LabourDetails.age);
        for (let i = 0; i < image.length; i++) {
          formData.append("image[]", image[i]);
        }

        await axios.post("api/labour", formData).then(function (response) {
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
  // console.log(LabourDetails);
  return (
    <main>
      <div className="p-10">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase decoration-wavy">
              Labour Register Form
            </h1>
            <form
              className="mt-6"
              onSubmit={Add_New_Labour}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={LabourDetails.title}
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
                  <span className="text-gray-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    onChange={handlechange}
                    value={LabourDetails.name}
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
                    placeholder="FullName"
                  />
                </label>
                {valErr.name && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Age</span>
                  <input
                    type="number"
                    name="age"
                    onChange={handlechange}
                    value={LabourDetails.age}
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
                    placeholder="age"
                  />
                </label>
                {valErr.age && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.age}
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Gender</span>
                  <input
                    type="text"
                    name="Gender"
                    onChange={handlechange}
                    value={LabourDetails.Gender}
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
                    placeholder="Gender"
                  />
                </label>
                {valErr.Gender && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.Gender}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Type</span>
                  <input
                    type="text"
                    name="type"
                    onChange={handlechange}
                    value={LabourDetails.type}
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
                    placeholder="Type of the labour"
                  />
                </label>
                {valErr.type && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.type}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Salary</span>
                  <input
                    type="number"
                    name="salary"
                    onChange={handlechange}
                    value={LabourDetails.salary}
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
                    placeholder="salary of the labour"
                  />
                </label>
                {valErr.salary && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.salary}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Skills</span>
                  <input
                    type="text"
                    name="skills"
                    onChange={handlechange}
                    value={LabourDetails.skills}
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
                    placeholder="Skills"
                  />
                </label>
                {valErr.skills && (
                  <div className="flex">
                    <span className="text-red-400 text-sm font-bold p-2">
                      {valErr.skills}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Labour Images</span>
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
                    value={LabourDetails.details}
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

export default AddLabour;
