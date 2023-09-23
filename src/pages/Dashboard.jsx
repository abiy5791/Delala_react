import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import axios from "../api/axios";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    await axios.get("api/users").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Outlet />
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;
