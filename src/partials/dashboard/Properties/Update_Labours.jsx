import React, { useState, useEffect } from "react";
import {} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import CircularProgress from "../../../components/CircularProgress";
export default function UpdateLabours() {
  const [labourinfos, setLabourinfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/labour/${params.id}`)
      .then((response) => setLabourinfos(response.data))
      .catch((err) => console.log(err));
  }, []);

  function handlechange(e) {
    if (e.target.type === "file") {
      const selectedFile = e.target.files;
      setImage(selectedFile);
    } else {
      setLabourinfos((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const update_labour = async (event) => {
    event.preventDefault();

    setErrors([]);
    setIsLoading(true);

    try {
      const formData = new FormData();
      // Append fields to formData
      formData.append("title", labourinfos.title);
      formData.append("name", labourinfos.name);
      formData.append("skills", labourinfos.skills);
      formData.append("Gender", labourinfos.Gender);
      formData.append("delala_id", labourinfos.delala_id);
      formData.append("type", labourinfos.type);
      formData.append("age", labourinfos.age);
      formData.append("salary", labourinfos.salary);
      formData.append("details", labourinfos.details);
      formData.append("_method", "put");

      if (image !== null) {
        for (let i = 0; i < image.length; i++) {
          formData.append("image[]", image[i]);
        }
      }

      await axios
        .post(`api/labour/${params.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
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
              Labour Update Form
            </h1>
            <form
              className="mt-6"
              onSubmit={update_labour}
              encType="multipart/form-data"
            >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    onChange={handlechange}
                    value={labourinfos.title}
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
                  <span className="text-gray-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    onChange={handlechange}
                    value={labourinfos.name}
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
                  <span className="text-gray-700">Age</span>
                  <input
                    type="number"
                    name="age"
                    onChange={handlechange}
                    value={labourinfos.age}
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
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Gender</span>
                  <select
                    type="text"
                    name="Gender"
                    onChange={handlechange}
                    value={labourinfos.Gender}
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
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Type</span>
                  <input
                    type="text"
                    name="type"
                    onChange={handlechange}
                    value={labourinfos.type}
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
                  <span className="text-gray-700">Salary</span>
                  <input
                    type="number"
                    name="salary"
                    onChange={handlechange}
                    value={labourinfos.salary}
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
                  <span className="text-gray-700">Skills</span>
                  <input
                    type="text"
                    name="skills"
                    onChange={handlechange}
                    value={labourinfos.skills}
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
                    value={labourinfos.details}
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
