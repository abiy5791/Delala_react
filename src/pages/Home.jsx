import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "../api/axios";
import ImageSlider from "../components/ImageSlider";
dayjs.extend(relativeTime);

const Home = () => {
  const [props, setProps] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({
    property: "",
    type: "",
    budget: "",
  });
  const [filtered, setFiltered] = useState([]);
  const [content, setContent] = useState([]);

  const getProps = async () => {
    await axios.get("api/prop").then((response) => {
      setProps(response.data);
    });
  };

  useEffect(() => {
    getProps();
  }, []);

  const handleSelect = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  const handleFilter = (e) => {
    const { property, type, budget } = selected;
    const filtered = props.filter((prop) => {
      return prop.model_type === property;
    });
    const houses = props.filter((prop) => {
      return prop.model_type === "house";
    });

    const filtered2 = houses.filter((house) => {
      return house.status === type;
    });

    const filtered3 = houses.filter((house) => {
      return house.price <= budget;
    });
    let arr = [...filtered, ...filtered2, ...filtered3];
    let mergedArr = [...new Set(arr)];
    setFiltered(mergedArr);
  };

  useEffect(() => {
    if (filtered.length > 0) {
      setContent(filtered);
    } else {
      setContent(props);
    }
  }, [props, filtered]);

  const propertyImages = [
    {
      url: "https://c4.wallpaperflare.com/wallpaper/619/464/927/ford-mustang-car-blue-cars-ford-wallpaper-preview.jpg",
      text: "You can get best car here ! in our website",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661908865730-a148ecdb610a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Elegant bedroom with walk-in closet",
    },
    {
      url: "https://images.unsplash.com/photo-1574120582683-1adf79c5dfd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      text: "Spacious kitchen with modern appliances",
    },
  ];

  return (
    <>
      <section className="py-1 dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:flex-row">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-5xl font-bold leadi">Welcome To Delala.com</h1>
            <p className="text-lg">
              "Effortlessly Find, Rent, or Buy Properties with our Revolutionary
              Broker App"
            </p>
          </div>
        </div>
      </section>
      <ImageSlider images={propertyImages} />
      <div class="max-w-3xl mx-auto px-5 pt-4">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Choose Property Type
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelect}
              name="property"
            >
              <option value=""></option>
              <option value="house">House</option>
              <option value="car">Car</option>
              <option value="labour">Labour</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Rent or Sale House
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelect}
              name="type"
            >
              <option value=""></option>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Budget For House
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelect}
              name="budget"
            >
              <option value=""></option>
              <option value="10000000">up to 10 mil</option>
              <option value="30000000">up to 30 mil</option>
              <option value="50000000">up to 50 mil</option>
              <option value="90000000000000000000">more than 50 mil</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2 flex items-end justify-center">
            <div class="bg-grey-500 col-12 mt-3 align-middle justify-content-center flex">
              <button
                onClick={handleFilter}
                class="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-gray-600 font-medium"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="px-1">Filter</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold leadi">Get More You Need</h1>
            <p className="text-lg">
              Search what you need to find out about the latest and greatest
              news about just about everything!
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
            <div className="flex flex-row">
              <form onChange={(e) => setSearch(e.target.value)}>
                <input
                  type="text"
                  placeholder="Search"
                  className=" p-3 rounded-lg "
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="py-5">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          {search ? (
            <div class="grid gap-12 md:gap-6 md:grid-cols-4 lg:gap-12">
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
                    <div class="group space-y-6 inline-block w-full">
                      {prop.image && (
                        <img
                          class="h-40 w-60 rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                          loading="lazy"
                          width="100"
                          heighimageIndext="667"
                          src={`http://localhost:8000/${
                            prop.image.split("|")[0]
                          }`}
                          alt={`prop Image `}
                        />
                      )}
                      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
                        <Link to={`${prop.model_type}/${prop.id}`}>
                          {prop.title}
                        </Link>
                      </h3>

                      <div class="flex gap-6 items-center">
                        <div class="flex gap-2 items-center text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 text-gray-400 dark:text-gray-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>
                            Posted: {dayjs(prop.created_at).fromNow()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div class="grid gap-12 md:gap-6 md:grid-cols-4 lg:gap-12">
              {content.map((prop) => {
                return (
                  <div class="group space-y-6 inline-block w-full">
                    {prop.image && (
                      <img
                        class="h-60 w-60 rounded-2xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        loading="lazy"
                        width="100"
                        heighimageIndext="667"
                        src={`http://localhost:8000/${
                          prop.image.split("|")[0]
                        }`}
                        alt={`prop Image `}
                      />
                    )}
                    <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
                      <Link to={`${prop.model_type}/${prop.id}`}>
                        {prop.title}
                      </Link>
                    </h3>

                    <div class="flex gap-6 items-center">
                      <div class="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Posted: {dayjs(prop.created_at).fromNow()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
