import React from "react";
import useAuthContext from "../context/AuthContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Tab from "./Tab";

const DelalaBoard = () => {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <Header user={user} />
      <hr className="text-5xl font-bold text-gray-900" />
      <Tab />
      <Outlet />
    </div>
  );
};

export default DelalaBoard;
