import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import useAuthContext from "../context/AuthContext";
import validateForm from "../Validation/ValidateRegister";
import CircularProgress from "../components/CircularProgress";

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { register, isLoading } = useAuthContext();

  const [userDetail, setUserDetail] = useState({
    avatar: [],
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    kebelleId: [],
    phone: "",
    address: "",
  });
  const initialErrors = {
    avatar: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    kebelleId: "",
    phone: "",
    address: "",
  };
  const [errors, setErrors] = useState(initialErrors);
  const [enable, setEnable] = useState(true);

  function handlechange(e) {
    setErrors((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: "",
    }));
    setEnable(true);
    if (e.target.type === "file") {
      setUserDetail((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.files,
      }));
    } else {
      setUserDetail((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const handleNext = () => {
    const err = validateForm(activeStep, userDetail);
    setErrors(err);
    Object.keys(err).length > 0
      ? setEnable(false)
      : setActiveStep(activeStep + 1);
  };

  const handleRegister = async (event) => {
    //event.preventDefault();
    const err = validateForm(activeStep, userDetail);
    setErrors(err);
    Object.keys(err).length > 0 ? setEnable(false) : register(userDetail);
  };
  const steps = [
    { label: "User Info" },
    { label: "Password" },
    { label: "User Detail" },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            userDetail={userDetail}
            handlechange={handlechange}
            errors={errors}
          />
        );
      case 1:
        return (
          <Step2
            userDetail={userDetail}
            handlechange={handlechange}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step3
            userDetail={userDetail}
            handlechange={handlechange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  }
  console.log(errors);
  console.log(userDetail);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          connectorStateColors={true}
          connectorStyleConfig={{
            completedColor: "#5A5A5A",
            activeColor: "#5A5A5A",
            disabledColor: "#eee",
          }}
          styleConfig={{
            activeBgColor: "#808080",
            completedBgColor: "#5A5A5A",
            inactiveBgColor: "#eee",
            activeTextColor: "#fff",
            completedTextColor: "#fff",
            inactiveTextColor: "#5A5A5A",
          }}
        />
        <div style={{ padding: "20px" }}>
          {getSectionComponent()}
          <div class="max-w-3xl mx-auto px-4">
            <div class="flex justify-between">
              {activeStep !== 0 && (
                <div class="w-1/2">
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    class="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
                  >
                    Previous
                  </button>
                </div>
              )}
              {activeStep !== steps.length - 1 ? (
                <div class="w-1/2">
                  <button
                    onClick={handleNext}
                    className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white hover:bg-gray-600 font-medium ${
                      enable
                        ? " bg-gray-800"
                        : "cursor-not-allowed disabled bg-gray-600"
                    } `}
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div class="w-1/2">
                  {isLoading ? (
                    <div className="flex justify-center w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-400 hover:bg-gray-600 font-medium">
                      <CircularProgress />
                    </div>
                  ) : (
                    <button
                      class="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-800 hover:bg-gray-600 font-medium"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
