import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownProfile from "../components/DropdownProfile";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Header = ({ houseRef, carRef, othersRef, labourRef }) => {
  const { user } = useAuthContext();

  // const handleNav = (e) => {

  // };

  // const [props, setProps] = useState([]);
  // const [search, setSearch] = useState("");
  // const [content, setContent] = useState([]);
  // const [filtered, setFiltered] = useState([]);

  // const getProps = async () => {
  //   await axios.get("api/prop").then((response) => {
  //     setProps(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getProps();
  // }, []);

  // useEffect(() => {
  //   if (filtered.length > 0) {
  //     setContent(filtered);
  //   } else {
  //     setContent(props);
  //   }
  // }, [props, filtered]);
  // function truncateText(text, maxLength) {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + "...";
  //   }
  //   return text;
  // }
  return (
    <>
      <header class="relative bg-white">
        <p class="flex h-10 items-center justify-center bg-slate-200 px-4 text-sm text-black font-bold sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="border-b border-gray-200">
            <div class="flex h-16 items-center">
              <div class="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span class="sr-only">Company website</span>
                  <h1 className="font-bold text-3xl dark:text-blue-300">
                    Delala.com
                  </h1>
                </Link>
              </div>

              <nav class="flex m-auto">
                <a
                  class="cursor-pointer font-bold inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm  text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                  onClick={(e) => {
                    houseRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Houses
                </a>

                <a
                  class="cursor-pointer inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-bold text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                  onClick={(e) => {
                    carRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Cars
                </a>

                <a
                  class="cursor-pointer inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-bold text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                  onClick={(e) => {
                    labourRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Labours
                </a>

                <a
                  class="cursor-pointer inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-bold text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                  onClick={(e) => {
                    othersRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Others
                </a>
              </nav>

              {/* <div class="m-10 w-screen max-w-screen-md">
                <div class="flex flex-col">
                  <form onChange={(e) => setSearch(e.target.value)}>
                    <div class="relative w-full flex  items-center justify-between rounded-md">
                      <svg
                        class="absolute left-2 block h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" class=""></circle>
                        <line
                          x1="21"
                          y1="21"
                          x2="16.65"
                          y2="16.65"
                          class=""
                        ></line>
                      </svg>
                      <input
                        type="name"
                        name="search"
                        class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-slate-200 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Search by name, type, location, etc"
                      />
                    </div>
                  </form>
                </div>
              </div> */}

              <ul className="items-stretch hidden space-x-3 md:flex">
                {user ? (
                  <li>
                    <div className="flex items-center">
                      <Link to="/delala_dashboard" className="mr-5">
                        <div class="group flex w-full cursor-pointer items-center justify-center rounded-md bg-blue-400 px-6 py-2 text-white transition">
                          <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                            Post
                          </span>
                          <svg
                            class="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </Link>

                      <DropdownProfile />
                    </div>
                  </li>
                ) : (
                  <li className="flex">
                    <Link
                      to="/login"
                      className="flex items-center justify-center"
                    >
                      <button class="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-gray-600 font-medium">
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <div class="py-5">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          {search ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {content
                .filter((prop) => {
                  return search.toLowerCase() === ""
                    ? prop
                    : prop.title?.toLowerCase().includes(search) ||
                        prop.name?.toLowerCase().includes(search) ||
                        prop.skills?.toLowerCase().includes(search) ||
                        prop.Gender?.toLowerCase().includes(search) ||
                        prop.age?.toString().includes(search) ||
                        prop.price?.toString().includes(search) ||
                        prop.type?.toString().includes(search) ||
                        prop.model?.toLowerCase().includes(search) ||
                        prop.status?.toLowerCase().includes(search) ||
                        prop.location?.toLowerCase().includes(search) ||
                        prop.make?.toLowerCase().includes(search) ||
                        prop.color?.toLowerCase().includes(search) ||
                        prop.mileage?.toLowerCase().includes(search) ||
                        prop.salary?.toString().toLowerCase().includes(search);

                  // data.mile.toLowerCase().includes(search);
                })
                .map((prop) => {
                  return (
                    <div>
                      <Link to={`${prop.model_type}/${prop.id}`}>
                        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                          <div class="relative flex items-end overflow-hidden rounded-xl h-64">
                            {prop.image && (
                              <img
                                className="object-cover w-full h-full"
                                loading="lazy"
                                heighimageIndext="667"
                                src={`http://localhost:8000/${
                                  prop.image.split("|")[0]
                                }`}
                                alt={`prop Image `}
                              />
                            )}

                            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-slate-50 p-2 shadow-md">
                              <span class="ml-1 text-sm text-black">
                                Posted: {dayjs(prop.created_at).fromNow()}
                              </span>
                            </div>
                          </div>

                          <div class="mt-1 p-2">
                            <h2 class="text-slate-700 uppercase font-bold">
                              {truncateText(prop.title, 15)}
                            </h2>
                            <p class="mt-1 text-sm text-slate-400">
                              {prop.location}
                              {prop.name}
                              {prop.make}
                            </p>

                            <div class="mt-3 flex items-end justify-between">
                              <p>
                                <span class="text-lg font-bold text-orange-500">
                                  {prop.price}
                                  {prop.salary}
                                </span>
                                <span class="text-sm text-slate-400">
                                  {" "}
                                  Birr
                                </span>
                              </p>

                              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Header;
