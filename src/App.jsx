import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminRegister from "./pages/AdminRegister";
import Alert from "./components/Alert";
import { useEffect, useState, React } from "react";
// import DashboardA from "./pages/DashboardA";
import DelalaBoard from "./pages/DelalaBoard";
import Approval from "./pages/Approval";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    // Add an event listener to update the online status
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div className="bg-slate-100 min-h-screen dark:bg-gray-900 dark:text-white">
      {!isOnline && (
        <Alert AlertMessage={<b>Oops! No internet connection.</b>}></Alert>
      )}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route exact path="/admin_dashboard" element={<Dashboard />} />
          <Route path="/" />
          <Route path="/delala_dashboard" element={<DelalaBoard />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/password-reset/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
