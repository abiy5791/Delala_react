import React from "react";
import useAuthContext from "../context/AuthContext";

const DelalaBoard = () => {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <h1>Delala DashBoard</h1>
      <div>
        <h1>
          Welcome {"   "}
          {user?.role}
          {"   "}
          <b>{user?.name}</b>
          <button onClick={logout}>logout</button>
        </h1>
      </div>
    </div>
  );
};

export default DelalaBoard;
