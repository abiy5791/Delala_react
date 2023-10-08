import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "../api/axios";
import ImageSlider from "../components/ImageSlider";
import User01 from "../images/user-36-01.jpg";
import User02 from "../images/user-36-02.jpg";
import User03 from "../images/user-36-04.jpg";
import CircleSlider from "../components/CircleSlider";
import Header from "./Header";
import Footer from "./Footer";

dayjs.extend(relativeTime);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({
    property: "",
    type: "",
    budget: "",
  });
  const [filtered, setFiltered] = useState([]);
  const [content, setContent] = useState([]);
  const [houses, setHouses] = useState([]);
  const [cars, setCars] = useState([]);
  const [labours, setLabours] = useState([]);
  const [others, setOthers] = useState([]);

  const carRef = useRef();
  const houseRef = useRef();
  const labourRef = useRef();
  const othersRef = useRef();

  const getProps = async () => {
    await axios.get("api/prop").then((response) => {
      setProps(response.data);
    });
  };

  useEffect(() => {
    getProps();
    setIsLoading(false);
  }, []);

  const getHouse = async () => {
    await axios.get("api/house").then((response) => {
      setHouses(response.data);
    });
  };
  useEffect(() => {
    getHouse();
  }, []);

  const getCars = async () => {
    await axios.get("api/car").then((response) => {
      setCars(response.data);
    });
  };
  useEffect(() => {
    getCars();
  }, []);

  const getLabours = async () => {
    await axios.get("api/labour").then((response) => {
      setLabours(response.data);
    });
  };
  useEffect(() => {
    getLabours();
  }, []);

  const getOthers = async () => {
    await axios.get("api/other").then((response) => {
      setOthers(response.data);
    });
  };
  useEffect(() => {
    getOthers();
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
  const images = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/8ab14524-5e6f-435c-9caf-2152eee64d94.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/14251040-0228-4f8a-a5bf-b22d90a35fb3.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/14dc9888-8d8c-421f-8bde-ba2d17a338ab.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/0854e8d5-e752-484d-a170-1ddec306d1f1.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f484a28d-aea7-4667-85ac-3bd9b25d8490.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/26e4c7b3-8f57-48fa-a824-82ac11f23fa9.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/8ab14524-5e6f-435c-9caf-2152eee64d94.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/14251040-0228-4f8a-a5bf-b22d90a35fb3.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/14dc9888-8d8c-421f-8bde-ba2d17a338ab.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/0854e8d5-e752-484d-a170-1ddec306d1f1.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/0ed667bf-b069-413e-81d4-d63dd7da5d7d.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/31a83e45-ff0b-478a-add6-c9c797561d32.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/9f648deb-4491-4de5-a5e9-4f3e5130dd30.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/70e1a79c-d6e0-4552-8b5e-3c866241c86b.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/0ed667bf-b069-413e-81d4-d63dd7da5d7d.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/7170bbf8-745f-4786-8b1e-848804869fad.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/0854e8d5-e752-484d-a170-1ddec306d1f1.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f484a28d-aea7-4667-85ac-3bd9b25d8490.png?format=avif",
  ];

  const propertyImages = [
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/0c63217f-87e5-4c1e-b054-a3a1a45b6d3b.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/68aba0f3-9a94-4da1-b109-e2cc515983af.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/77ba999a-fa59-4733-afc5-e4a12ed72f3e.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/2671c6d1-ca09-4412-9d64-6f8781651c4f.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/df65c4dd-c4d2-4d0c-8b87-2bf87acd202b.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/6b104938-23fb-4271-b47e-cb58f664801c.gif?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/0d855c57-3580-4d5a-8b93-c4eab6b517f7.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/50e3e023-e923-42c5-8c9e-9d76f7ed4283.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/cb6b3ea6-85c4-48e5-bcf9-6e5a551d5d17.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/ad32969a-1d9e-4763-9e7f-cb2fe1dad854.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/683f5b9b-17da-45ae-8ca7-cfc9c7bb5b2c.png?format=avif",
    },
    {
      url: "https://f.nooncdn.com/mpcms/EN0001/assets/8650b0a1-ecac-49a2-9f0a-a7140dc5bb83.jpg?format=avif",
    },
  ];

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <>
      <Header
        carRef={carRef}
        houseRef={houseRef}
        labourRef={labourRef}
        othersRef={othersRef}
      />

      <div className="flex justify-center ">
        <div class="m-1 w-screen max-w-screen-xl">
          <div class="flex flex-col">
            <form
              onChange={(e) => setSearch(e.target.value)}
              className="flex justify-center "
            >
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
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  class="h-12 w-full border-blue-400 cursor-text rounded-md border bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="py-5">
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
                    <>
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
                    </>
                  );
                })}
            </div>
          ) : (
            <>
              <section className="py-1 dark:bg-gray-800 dark:text-gray-50">
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:flex-row">
                  <div className="flex flex-col space-y-4 text-center">
                    <h1 className="text-5xl font-bold leadi">
                      Welcome To Delala.com
                    </h1>
                    <p className="text-lg">
                      "Effortlessly Find, Rent, or Buy Properties with our
                      Revolutionary Broker App"
                    </p>
                  </div>
                </div>
              </section>
              <ImageSlider images={propertyImages} />
              <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div
                  class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                  aria-hidden="true"
                >
                  <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
                </div>
                <div
                  class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                  aria-hidden="true"
                >
                  <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
                </div>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p class="text-sm leading-6 text-gray-900">
                    <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-600">
                      Find Your Perfect Match Today!
                    </h2>
                    <svg
                      viewBox="0 0 2 2"
                      class="mx-2 inline h-0.5 w-0.5 fill-current"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="pr-40 font-bold text-gray-500 sm:text-md dark:text-gray-400">
                      Looking for the ideal property, car, skilled labor, or
                      other services? Our dedicated team of brokers is here to
                      connect you with the best options available in the market.
                      Whether you're searching for a dream home, a reliable car,
                      skilled professionals, or any other service, we have a
                      wide range of choices to meet your unique needs.
                    </p>
                  </p>
                  <div class="flex flex-col justify-center items-end">
                    <div>
                      <p class="text-gray-500 font-light dark:text-gray-400 text-xl">
                        Call us at:
                        <a
                          href="tel:0911121314"
                          class="text-gray-900 dark:text-gray-600 font-bold  "
                        >
                          +2519-11-12-13-14
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="max-w-3xl mx-auto px-5 pt-4">
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
                      <option value="9000000000000000">more than 50 mil</option>
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
              </div> */}
              <div class="mt-3 w-screen max-w-screen-md m-auto">
                <div class="flex flex-col justify-center items-center">
                  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      <div class="flex flex-col">
                        <label
                          for="manufacturer"
                          class="text-sm font-medium text-stone-600"
                        >
                          Choose Property Type
                        </label>

                        <select
                          name="property"
                          onChange={handleSelect}
                          id="manufacturer"
                          class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option value=""></option>
                          <option value="house">House</option>
                          <option value="car">Car</option>
                          <option value="labour">Labour</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div class="flex flex-col">
                        <label
                          for="manufacturer"
                          class="text-sm font-medium text-stone-600"
                        >
                          Rent or Sale House
                        </label>

                        <select
                          onChange={handleSelect}
                          name="type"
                          id="manufacturer"
                          class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option value=""></option>
                          <option value="sale">Sale</option>
                          <option value="rent">Rent</option>
                        </select>
                      </div>

                      <div class="flex flex-col">
                        <label
                          for="status"
                          class="text-sm font-medium text-stone-600"
                        >
                          Your Budget For House
                        </label>

                        <select
                          onChange={handleSelect}
                          name="budget"
                          id="status"
                          class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option value=""></option>
                          <option value="10000000">up to 10 mil</option>
                          <option value="30000000">up to 30 mil</option>
                          <option value="50000000">up to 50 mil</option>
                          <option value="9000000000000000">
                            more than 50 mil
                          </option>
                        </select>
                      </div>
                      <div class="flex flex-col">
                        <button
                          onClick={handleFilter}
                          class="w-32 mt-7 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-gray-600 font-medium"
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
              </div>

              {/* <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                  <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-4xl font-bold leadi">
                      Get More You Need
                    </h1>
                    <p className="text-lg">
                      Search what you need to find out about the latest and
                      greatest news about just about everything!
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
              </section> */}
              {/* <span className="loading loading-infinity loading-lg"></span> */}

              <div class="mt-3 bg-white rounded-xl dark:bg-slate-900">
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                    Recommended Items
                  </h2>

                  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {isLoading ? (
                      <div className="flex justify-center">
                        <span className="loading loading-bars loading-lg"></span>
                      </div>
                    ) : (
                      <>
                        {content.map((prop) => {
                          return (
                            <div class="group relative">
                              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                {prop.image && (
                                  <img
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    loading="lazy"
                                    height="667"
                                    src={`http://localhost:8000/${
                                      prop.image.split("|")[0]
                                    }`}
                                    alt={`prop Image`}
                                  />
                                )}
                              </div>
                              <div class="mt-4 flex justify-between">
                                <div>
                                  <h3 class="text-gray-700 font-bold text-md dark:text-slate-300">
                                    <Link to={`${prop.model_type}/${prop.id}`}>
                                      <span
                                        aria-hidden="true"
                                        class="absolute inset-0"
                                      ></span>
                                      {truncateText(prop.title, 15)}
                                    </Link>
                                  </h3>
                                  <p class="mt-1 text-sm text-gray-500 dark:text-slate-300">
                                    {prop.location}
                                    {prop.make}
                                    {prop.name}
                                  </p>
                                </div>
                                <p class="text-md font-bold dark:text-slate-300">
                                  {prop.price}
                                  {prop.salary}
                                  {" Birr"}
                                </p>
                              </div>
                              <span className="text-gray-400">
                                Posted: {dayjs(prop.created_at).fromNow()}
                              </span>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          {/* <img
            className="m-auto mt-3 mb-3"
            src="https://f.nooncdn.com/mpcms/EN0001/assets/251b847a-f343-42e6-ab2e-1468069e6eba.gif?format=avif"
          ></img> */}
          <div class="flex min-h-screen">
            <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
              <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
                <div class="mb-16 lg:my-auto lg:max-w-lg">
                  <div class="mb-6 max-w-xl">
                    <div>
                      <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                        25% off this summer
                      </p>
                    </div>
                    <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-4xl sm:leading-snug">
                      <span class="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                        Revolutionary Broker App
                      </span>
                      Delala.com
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                      "Effortlessly Find, Rent, or Buy Properties with our
                      Revolutionary Broker App"
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
                <div class="hidden w-56 items-center space-y-3 lg:flex">
                  <div class="overflow-hidden rounded-xl bg-yellow-400">
                    <img
                      class="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
                  <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
                    <img
                      class="mx-auto h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                  <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                    <img
                      class="mx-auto h-full w-full object-cover"
                      src="https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                  <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                    <img
                      class="mx-auto h-full w-full object-cover"
                      src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ImageSlider images={propertyImages} />
          <div
            class="bg-white rounded-xl dark:bg-slate-900 "
            name="houses"
            ref={houseRef}
          >
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                Houses
              </h2>
              <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                {houses.map((house) => {
                  return (
                    <div class="relative mx-auto w-full">
                      <Link
                        to={`house/${house.id}`}
                        class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                      >
                        <div class="shadow p-4 rounded-lg bg-white dark:bg-slate-800">
                          <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                            <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                              <div class="absolute inset-0 bg-black">
                                <img
                                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                  src={`http://localhost:8000/${
                                    house.image.split("|")[0]
                                  }`}
                                ></img>
                              </div>
                            </div>

                            <div class="absolute flex justify-center bottom-0 mb-3">
                              <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                                <p class="flex items-center font-medium text-gray-800 dark:text-slate-300">
                                  <svg
                                    class="w-5 h-5 fill-current mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                                  </svg>
                                  {house.bedrooms}
                                </p>

                                <p class="flex items-center font-medium text-gray-800 dark:text-slate-300">
                                  <svg
                                    class="w-5 h-5 fill-current mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 480 512"
                                  >
                                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                                  </svg>
                                  {house.parking}
                                </p>

                                <p class="flex items-center font-medium text-gray-800 dark:text-slate-300">
                                  <svg
                                    class="w-5 h-5 fill-current mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                                  </svg>
                                  {house.bedrooms}
                                </p>
                              </div>
                            </div>

                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                              Featured
                            </span>
                          </div>

                          <div class="mt-4">
                            <h2
                              class="font-medium text-base md:text-lg text-gray-800 line-clamp-1 dark:text-slate-300"
                              title="New York"
                            >
                              {truncateText(house.title, 15)}
                            </h2>
                            <p
                              class="mt-2 text-sm text-gray-800 line-clamp-1 dark:text-slate-300"
                              title="New York, NY 10004, United States"
                            >
                              {house.location}
                            </p>
                          </div>

                          <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 dark:text-slate-300">
                              <svg
                                class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800 dark:text-slate-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                              </svg>
                              <span class="mt-2 xl:mt-0 uppercase">
                                {house.type}
                              </span>
                            </p>
                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 dark:text-slate-300">
                              <svg
                                class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800 dark:text-slate-300"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                              </svg>
                              <span class="mt-2 xl:mt-0 uppercase">
                                {house.status}
                              </span>
                            </p>
                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 dark:text-slate-300">
                              <svg
                                class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800 dark:text-slate-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                              </svg>
                              <span class="mt-2 xl:mt-0">{house.area}</span>
                            </p>
                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 dark:text-slate-300">
                              <svg
                                class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800 dark:text-slate-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                              </svg>
                              <span class="mt-2 xl:mt-0 text-green-400 font-bold">
                                {house.price}
                                {" Birr"}
                              </span>
                            </p>
                          </div>

                          <div class="grid grid-cols-1 mt-8">
                            <p class="ml-2 text-gray-800 line-clamp-1 dark:text-slate-300">
                              Posted: {dayjs(house.created_at).fromNow()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <CircleSlider images={images} />
          <div class="bg-white rounded-xl dark:bg-slate-900" ref={carRef}>
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                Cars
              </h2>
              <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {cars.map((car) => {
                  return (
                    <div class="relative mx-auto w-full">
                      <Link
                        to={`car/${car.id}`}
                        class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                      >
                        <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 dark:border-transparent bg-white dark:bg-slate-800 shadow-md">
                          <a
                            class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                            href="#"
                          >
                            <img
                              class="peer absolute top-0 right-0 h-full w-full object-cover"
                              src={`http://localhost:8000/${
                                car.image.split("|")[0]
                              }`}
                              alt="product image"
                            />
                            <img
                              class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                              src={`http://localhost:8000/${
                                car.image.split("|")[1]
                              }`}
                              alt="product image"
                            />

                            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                              39% OFF
                            </span>
                          </a>
                          <div class="mt-4 px-5 pb-5">
                            <a href="#">
                              <h5 class="text-xl tracking-tight text-slate-900 dark:text-slate-300">
                                {truncateText(car.title, 15)}
                              </h5>
                            </a>
                            <div class="mt-2 mb-5 flex items-center justify-between">
                              <p>
                                <span class="text-lg font-bold text-slate-900 dark:text-slate-300">
                                  {car.price}
                                  {" Birr "}
                                </span>
                                <span class="text-sm text-slate-900 line-through dark:text-slate-300">
                                  20000 Birr
                                </span>
                              </p>
                            </div>
                            <div class="grid grid-cols-1">
                              <p class=" text-gray-800 line-clamp-1 dark:text-slate-300">
                                Posted: {dayjs(car.created_at).fromNow()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <ImageSlider images={propertyImages} />
          <div class="bg-white rounded-xl dark:bg-slate-900" ref={labourRef}>
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                Labours
              </h2>
              <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {labours.map((labour) => {
                  return (
                    <div class="relative mx-auto w-full">
                      <Link
                        to={`labour/${labour.id}`}
                        class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                      >
                        <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 dark:border-transparent dark:bg-slate-800 bg-white shadow-md">
                          <a
                            class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                            href="#"
                          >
                            <img
                              class="peer absolute top-0 right-0 h-full w-full object-cover"
                              src={`http://localhost:8000/${
                                labour.image.split("|")[0]
                              }`}
                              alt="product image"
                            />

                            <span class="absolute top-0 left-0 m-2 rounded-lg bg-slate-100 px-2 text-center text-sm font-medium text-black">
                              Best
                            </span>
                          </a>
                          <div class="mt-4 px-5 pb-5">
                            <a href="#">
                              <h5 class="text-xl tracking-tight text-slate-900 dark:text-slate-300">
                                {truncateText(labour.title, 15)}
                              </h5>
                            </a>
                            <div class="mt-2 mb-5 flex items-center justify-between">
                              <p>
                                <span class="text-lg font-bold text-slate-900 dark:text-slate-300">
                                  {labour.salary}
                                  {" Birr "}
                                </span>
                                <span class="text-sm text-slate-900 line-through dark:text-slate-300">
                                  10,000 Birr
                                </span>
                              </p>
                            </div>
                            <div class="grid grid-cols-1">
                              <p class=" text-gray-800 line-clamp-1 dark:text-slate-300">
                                Posted: {dayjs(labour.created_at).fromNow()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ImageSlider images={propertyImages} />
          <img
            className="flex justify-center mx-auto"
            src="https://f.nooncdn.com/mpcms/EN0001/assets/27d51390-d09d-42b3-9e6f-a4b8b4d4f8a3.png?format=avif"
          ></img>
          <div class="bg-white rounded-xl dark:bg-slate-900" ref={othersRef}>
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                Other Things
              </h2>
              <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {others.map((other) => {
                  return (
                    <div class="relative mx-auto w-full">
                      <Link
                        to={`other/${other.id}`}
                        class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                      >
                        <div class="shadow p-4 rounded-lg bg-white dark:bg-slate-800">
                          <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                            <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                              <div class="absolute inset-0 bg-black">
                                <img
                                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                  src={`http://localhost:8000/${
                                    other.image.split("|")[0]
                                  }`}
                                ></img>
                              </div>
                            </div>

                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-purple-300 text-sm font-medium text-white select-none">
                              Best Sellers
                            </span>
                          </div>

                          <div class="mt-4">
                            <h2
                              class="font-medium text-base md:text-lg text-gray-800 line-clamp-1 dark:text-slate-300"
                              title="New York"
                            >
                              {truncateText(other.title, 15)}
                            </h2>
                            <p
                              class="mt-2 text-lg font-bold text-gray-800 line-clamp-1 dark:text-slate-300"
                              title="New York, NY 10004, United States"
                            >
                              {other.price}
                              {" Birr"}
                            </p>
                          </div>

                          <div class="grid grid-cols-1 mt-1">
                            <p class=" text-gray-800 line-clamp-1 dark:text-slate-300">
                              Posted: {dayjs(other.created_at).fromNow()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <section class="bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col items-center">
                <div class="text-center">
                  <p class="text-lg font-medium text-blue-600">
                    623 People Recommend us at Google Reviews
                  </p>
                  <h2 class="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">
                    Have a look at what our clients say
                  </h2>
                </div>

                <div class="relative mt-10 md:order-2 md:mt-24">
                  <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div class="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
                  </div>

                  <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                    <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                      <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                        <div class="flex-1">
                          <div class="flex items-center">
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <blockquote class="mt-8 flex-1">
                            <p class="font-[400] text-lg italic text-blue-900">
                              "Delal.com has truly transformed our business.
                              Their innovative solutions and exceptional
                              customer support have helped us achieve remarkable
                              results. Thank you!"
                            </p>
                          </blockquote>
                        </div>

                        <div class="mt-8 flex items-center">
                          <img
                            class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                            src={User01}
                            alt=""
                          />
                          <div class="ml-4">
                            <p class="text-base font-bold text-blue-900">
                              Sarah Johnson
                            </p>
                            <p class="mt-0.5 text-sm text-gray-500">
                              Business Owners
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                      <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                        <div class="flex-1">
                          <div class="flex items-center">
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <blockquote class="mt-8 flex-1">
                            <p class="font-[400] text-lg italic text-blue-900">
                              "I couldn't be happier with the service provided
                              by Delala.com. Their attention to detail and
                              professionalism exceeded my expectations. Highly
                              recommended!"
                            </p>
                          </blockquote>
                        </div>

                        <div class="mt-8 flex items-center">
                          <img
                            class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                            src={User02}
                            alt=""
                          />
                          <div class="ml-4">
                            <p class="text-base font-bold text-blue-900">
                              John Smith
                            </p>
                            <p class="mt-0.5 text-sm text-gray-500">CFO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                      <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                        <div class="flex-1">
                          <div class="flex items-center">
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              class="h-5 w-5 text-orange-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <blockquote class="mt-8 flex-1">
                            <p class="font-[400] text-lg italic text-blue-900">
                              "Choosing Delala.com was the best decision we
                              made. Their expertise and dedication have been
                              instrumental in our success. We are grateful for
                              their outstanding support!"
                            </p>
                          </blockquote>
                        </div>

                        <div class="mt-8 flex items-center">
                          <img
                            class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                            src={User03}
                            alt=""
                          />
                          <div class="ml-4">
                            <p class="text-base font-bold text-blue-900">
                              David Thompson
                            </p>
                            <p class="mt-0.5 text-sm text-gray-500">CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
            <div class="flex flex-wrap">
              <div class="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
                <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
                  Our Clients
                </h2>
                <h3 class="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">
                  Trusted by over 300+ clients
                </h3>
                <p class="">
                  We bring solutions to make life easier for our customers.
                </p>
              </div>
              <div class="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/qr76A1CV-Bngcu7a43OtD.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/_zdDNHsf3wwrPIPNx_5YL.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/famjKUew9dTPjjl1stpS7.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/0theMmZM4a-L5PWRswKPD.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/fYCAxh-v8cM9_Kz5F_NWc.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/tNngfZmftaEAbhB6-nkdB.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/1jqHy4mfbbJdowYMMYmv4.png"
                      alt=""
                      class=""
                    />
                  </div>
                  <div class="w-32">
                    <img
                      src="https://componentland.com/images/znFUHjtfFGgWw3iwf6L7U.png"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        carRef={carRef}
        houseRef={houseRef}
        labourRef={labourRef}
        othersRef={othersRef}
      />
    </>
  );
};
export default Home;
