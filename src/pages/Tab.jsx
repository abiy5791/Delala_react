import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tab = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section>
        <div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="w-full mb-14">
                <div className="flex flex-wrap items-center justify-center rounded-lg border border-[#E4E4E4] py-3 px-4 space-x-2">
                  <Link
                    to="addHouse"
                    onClick={() => handleTabOpen("home")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-gray-500 hover:text-white transition-all delay-75 cursor-pointer ${
                      open === "home" ? "bg-gray-800 text-white" : " "
                    }`}
                  >
                    For House
                  </Link>
                  <Link
                    to="addCar"
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-gray-500 hover:text-white transition-all delay-75 cursor-pointer ${
                      open === "about" ? "bg-gray-800 text-white" : " "
                    }`}
                  >
                    For Car
                  </Link>
                  <Link
                    to="addLabour"
                    onClick={() => handleTabOpen("team")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-gray-500 hover:text-white transition-all delay-75 cursor-pointer ${
                      open === "team" ? "bg-gray-800 text-white" : " "
                    }`}
                  >
                    For Labour
                  </Link>
                  <Link
                    to="addOther"
                    onClick={() => handleTabOpen("company")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-gray-500 hover:text-white transition-all delay-75 cursor-pointer ${
                      open === "company" ? "bg-gray-800 text-white" : " "
                    }`}
                  >
                    For Others
                  </Link>
                </div>
                {/* <TabContent
                  details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                  tabCategory="home"
                  open={open}
                />
                <TabContent
                  details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
                  tabCategory="about"
                  open={open}
                />
                <TabContent
                  details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?"
                  tabCategory="team"
                  open={open}
                />
                <TabContent
                  details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                  tabCategory="company"
                  open={open}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tab;

// const TabContent = ({ open, tabCategory, details }) => {
//   return (
//     <div>
//       <div
//         className={`p-6 text-base leading-relaxed text-body-color ${
//           open === tabCategory ? "block" : "hidden"
//         } `}
//       >
//         {details}
//       </div>
//     </div>
//   );
// };
