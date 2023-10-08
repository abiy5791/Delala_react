import React, { useEffect, useState } from "react";

const Footer = ({ houseRef, carRef, othersRef, labourRef }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer class="bg-gray-50">
      <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div class="max-w-sm">
          <div class="mb-6 flex h-12 items-center space-x-2">
            <span class="text-2xl font-bold">
              Delala<span class="text-blue-600">.com</span>
            </span>
          </div>
          <div class="text-gray-500">
            "Effortlessly Find, Rent, or Buy Properties with our Revolutionary
            Broker App"
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div class="text-gray-500">
            ABC Building <br />
            Bole Street, <br />
            Addis Ababa, Ethiopia
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" class="text-gray-500">
            <ul class="space-y-3">
              <li>
                <a
                  class="hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => {
                    houseRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Houses
                </a>
              </li>
              <li>
                <a
                  class="hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => {
                    carRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  class="hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => {
                    labourRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Labours
                </a>
              </li>
              <li>
                <a
                  class="hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => {
                    othersRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Others
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div class="flex flex-col">
            <div class="mb-4">
              <input
                type="email"
                class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div>© {currentYear} Delala.com | All Rights Reserved</div>
          <div class="">
            <a class="">Privacy Policy</a>
            <span>|</span>
            <a class="">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
