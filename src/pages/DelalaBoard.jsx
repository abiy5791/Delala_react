import React from "react";
import useAuthContext from "../context/AuthContext";

const DelalaBoard = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Delala DashBoard</h1>
      <div>
        <h1>
          Welcome {"   "}
          {user?.role}
          {"   "}
          <b>{user?.name}</b>
        </h1>
      </div>
    </div>
  );
};

export default DelalaBoard;
