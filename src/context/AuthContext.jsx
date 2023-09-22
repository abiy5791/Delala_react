import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  const fetchCsrfToken = async () => {
    try {
      await axios.get("/sanctum/csrf-cookie"); // Fetch the CSRF token
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  const getUser = async () => {
    const { data } = await axios.get("api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await fetchCsrfToken();
    setErrors([]);
    setIsLoading(true);
    try {
      await axios.post("/login", data);
      await getUser();
      console.log(user);
      if (user.role === "admin") {
        navigate("/admin_dashboard");
      } else {
        navigate("/");
      }
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  const register = async ({ ...data }) => {
    await fetchCsrfToken();
    setErrors([]);
    setIsLoading(true);

    console.log(data);

    try {
      const formData = new FormData();
      // Append fields to formData
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.password_confirmation);
      formData.append("address", data.address);
      formData.append("avatar", data.avatar[0]);
      formData.append("kebelleId", data.KebelleId[0]);
      formData.append("phone", data.phone);

      console.log(Object.fromEntries(formData));
      await axios.post("/register", formData).then((res) => {
        console.log(res);
      });
      navigate("/approval");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  const Userregister = async ({ ...data }) => {
    await fetchCsrfToken();
    setErrors([]);
    setIsLoading(true);
    console.log(data);
    try {
      await axios.post("/user_register", data);
      navigate("/admin_dashboard/users");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  const logout = () => {
    axios.post("/logout").then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        errors,
        getUser,
        login,
        register,
        Userregister,
        logout,
        fetchCsrfToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
