import React from "react";
import useAuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Admin Dashboard</h1>
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

export default Dashboard;
