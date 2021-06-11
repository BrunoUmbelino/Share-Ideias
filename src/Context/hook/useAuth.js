import { useEffect, useState } from "react";
import history from "../../Routes/history";
import { LoginAPI, api } from "../../Services/api";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  async function handleLogin({ username, password }) {
    try {
      const token = await LoginAPI(username, password);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", `${token}`);
      setAuthenticated(true);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoginError("Invalid username or password, check them and try again.");
      setTimeout(() => {
        setLoginError("");
      }, 6000);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setAuthenticated(false);
    history.push("/sign-in");
    api.defaults.headers.common["Authorization"] = undefined;
  }

  return { authenticated, loginError, loading, handleLogin, handleLogout };
}
