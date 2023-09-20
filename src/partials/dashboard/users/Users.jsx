import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "../../../api/axios";
function Users() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    await axios.get("api/users").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Users
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Email</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Role</div>
                </th>

                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <svg
                          className="shrink-0 mr-2 sm:mr-3"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                        >
                          <circle fill="#24292E" cx="18" cy="18" r="18" />
                          <path
                            d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                            fill="#FFF"
                          />
                        </svg>
                        <div className="text-slate-800 dark:text-slate-100">
                          <Link to={`${user.id}`}>{user.name}</Link>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{user.email}</div>
                    </td>
                    <td className="p-2">
                      {user.role === "admin" ? (
                        <div className="text-center text-emerald-500">
                          Admin
                        </div>
                      ) : (
                        <div className="text-center text-blue-500">Delala</div>
                      )}
                    </td>

                    <td className="p-2">
                      {user.status ? (
                        <span className="hidden text-center xs:block ml-2 text-green-500">
                          Approved
                        </span>
                      ) : (
                        <span className="hidden text-center xs:block ml-2 text-red-500">
                          pending ...
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <Link to="add_user">
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add</span>
              </button>
            </Link>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
