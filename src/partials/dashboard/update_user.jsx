import React, { useState, useEffect } from "react";
import {} from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
export default function Update_user() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userinfos, setUserinfos] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/users/${params.id}`)
      .then((response) => setUserinfos(response.data))
      .catch((err) => console.log(err));
  }, []);

  function handlechange(e) {
    var { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (checked) {
        value = "admin";
      } else {
        value = "delala";
      }
    }

    setUserinfos((previnfo) => {
      return {
        ...previnfo,
        [name]: value,
      };
    });
  }
  console.log(userinfos);
  const update_user = async (e) => {
    e.preventDefault();
    await axios.put(`api/users/${params.id}`, userinfos).then(() => {
      navigate("/admin_dashboard");
    });
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
                  update Form
                </h1>
                <form className="mt-6" onSubmit={update_user}>
                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">Your name</span>
                      <input
                        type="text"
                        name="name"
                        value={userinfos.name}
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
                        placeholder="Name"
                      />
                    </label>
                  </div>

                  <div className="mb-2">
                    <label>
                      <span className="text-gray-700">Email address</span>
                      <input
                        name="email"
                        type="email"
                        value={userinfos.email}
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
                  </div>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      id="isAdmin"
                      className="mr-2"
                      name="role"
                      onChange={handlechange}
                      checked={userinfos.role === "delala" ? 0 : 1}
                    />
                    <label htmlFor="isAdmin">Is admin</label>
                  </div>

                  <div class="mb-6">
                    <button
                      type="submit"
                      className="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
                    >
                      Update
                    </button>
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
