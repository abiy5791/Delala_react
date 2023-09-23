import { Outlet, Navigate, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user } = useAuthContext();
  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} />
  );
};

export default AuthLayout;
