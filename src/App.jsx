import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminRegister from "./pages/AdminRegister";
import Dashboard from "./pages/Dashboard";
import Detail from "./partials/dashboard/users/details";
import Update_user from "./partials/dashboard/users/update_user";
import Addusers from "./partials/dashboard/users/Addusers";
import Alert from "./components/Alert";
import { useEffect, useState, React } from "react";
// import DashboardA from "./pages/DashboardA";
import DelalaBoard from "./pages/DelalaBoard";
import Approval from "./pages/Approval";
import "./css/style.css";
import "./charts/ChartjsConfig";
import CarDetails from "./partials/dashboard/Properties/CarDetails";
import AdminHome from "./pages/AdminHome";

import House from "./partials/dashboard/Properties/House";
import Car from "./partials/dashboard/Properties/Car";
import Labour from "./partials/dashboard/Properties/Labour";
import Other from "./partials/dashboard/Properties/Other";
import Users from "./partials/dashboard/users/Users";
import ProLayout from "./layouts/ProLayout";
import HouseDetails from "./partials/dashboard/Properties/HouseDetails";
import LabourDetails from "./partials/dashboard/Properties/LabourDetails";
import OthersDetail from "./partials/dashboard/Properties/OtherDetails";
import AddCar from "./partials/dashboard/Properties/AddCar";
import AddHouse from "./partials/dashboard/Properties/AddHouse";
import AddLabour from "./partials/dashboard/Properties/AddLabour";
import AddOthers from "./partials/dashboard/Properties/AddOthers";
import UpdateOthers from "./partials/dashboard/Properties/Update_Others";
import UpdateHouses from "./partials/dashboard/Properties/Update_Houses";
import UpdateCars from "./partials/dashboard/Properties/Update_Cars";
import UpdateLabours from "./partials/dashboard/Properties/Update_Labours";
import Home from "./partials/dashboard/Properties/Home";
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
          <Route exact path="/admin_dashboard" element={<Dashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<ProLayout />}>
              <Route index element={<Users />} />
              <Route path=":id" element={<ProLayout />}>
                <Route index element={<Detail />} />
                <Route path="update" element={<Update_user />} />
              </Route>
              <Route path="add_user" element={<Addusers />} />
            </Route>
            <Route path="cars" element={<ProLayout />}>
              <Route index element={<Car />} />
              <Route path=":id" element={<ProLayout />}>
                <Route index element={<CarDetails />} />
                <Route path="update" element={<UpdateCars />} />
              </Route>
              <Route path="add_cars" element={<AddCar />} />
            </Route>
            <Route path="house" element={<ProLayout />}>
              <Route index element={<House />} />
              <Route path=":id" element={<ProLayout />}>
                <Route index element={<HouseDetails />} />
                <Route path="update" element={<UpdateHouses />} />
              </Route>
              <Route path="add_houses" element={<AddHouse />} />
            </Route>
            <Route path="labour" element={<ProLayout />}>
              <Route index element={<Labour />} />
              <Route path=":id" element={<ProLayout />}>
                <Route index element={<LabourDetails />} />
                <Route path="update" element={<UpdateLabours />} />
              </Route>
              <Route path="add_labours" element={<AddLabour />} />
            </Route>
            <Route path="others" element={<ProLayout />}>
              <Route index element={<Other />} />
              <Route path=":id" element={<ProLayout />}>
                <Route index element={<OthersDetail />} />
                <Route path="update" element={<UpdateOthers />} />
              </Route>
              <Route path="add_others" element={<AddOthers />} />
            </Route>

            <Route path="add_user" element={<Addusers />} />
          </Route>

          <Route path="/delala_dashboard" element={<DelalaBoard />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          <Route path="/approval" element={<Approval />} />
          <Route path="/password-reset/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
