import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get("http://localhost:5000/is-logged-in", {
          withCredentials: true, // Untuk session cookies
        });
        if (!response.data.loggedIn) {
          navigate("/login"); // Redirect ke halaman login
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        navigate("/login");
      }
    };

    checkLogin();
  }, [navigate]);

  return children; // Render halaman jika sudah login
};

export default ProtectedRoute;
