import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import useAuthContext from "../context/AuthContext";
import UserAvatar from "../images/user-avatar-32.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function DropdownProfile({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const { logout } = useAuthContext();
  const { user } = useAuthContext();

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={
            user.avatar ? `http://localhost:8000/${user.avatar}` : UserAvatar
          }
          width="40"
          height="40"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            {user.name}
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div class="m-10 p-1 max-w-sm">
            <div class="relative mx-auto w-36 rounded-full">
              <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                class="mx-auto h-auto w-full rounded-full"
                src={
                  user.avatar
                    ? `http://localhost:8000/${user.avatar}`
                    : UserAvatar
                }
                alt=""
              />
            </div>
            <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900 uppercase">
              {user.name}
            </h1>
            <h3 class="font-lg text-semibold text-center leading-6 text-gray-600 font-bold">
              {user.role}
            </h3>
            <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
              {user.email}
            </p>
            <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li class="flex items-center py-3 text-sm">
                <span>Status</span>
                <span class="ml-auto">
                  <span class="py-1 px-2 text-xs font-medium text-green-700">
                    {user.status ? (
                      <span className="hidden text-center xs:block ml-2 text-green-500">
                        Active
                      </span>
                    ) : (
                      <span className="hidden text-center xs:block ml-2 text-red-500">
                        pending ...
                      </span>
                    )}
                  </span>
                </span>
              </li>
              <li class="flex items-center py-1 text-sm">
                <span>Joined</span>
                <span class="ml-auto">{dayjs(user.created_at).fromNow()}</span>
              </li>
            </ul>
            <div
              onClick={logout}
              class="group flex mt-2 w-full cursor-pointer items-center justify-center rounded-md bg-indigo-700 px-6 py-2 text-white transition"
            >
              <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                Logout
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    //     <div class="m-10 max-w-sm">
    //   <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    //     <div class="relative mx-auto w-36 rounded-full">
    //       <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
    //       <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    //     </div>
    //     <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Michael Simbal</h1>
    //     <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
    //     <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
    //     <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
    //       <li class="flex items-center py-3 text-sm">
    //         <span>Status</span>
    //         <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Open for side gigs</span></span>
    //       </li>
    //       <li class="flex items-center py-3 text-sm">
    //         <span>Joined On</span>
    //         <span class="ml-auto">Apr 08, 2022</span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default DropdownProfile;
