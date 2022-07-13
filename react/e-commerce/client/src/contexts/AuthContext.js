import { useState, useEffect, createContext, useContext } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { fetchMe, fetchLogout } from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();

        setLoggedIn(true);
        setUser(me);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);

    navigate("../profile", { replace: true });
  };

  const logout = async () => {
    setLoggedIn(false);
    setUser(null);

    await fetchLogout();

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");

    navigate("../", { replace: true });
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="pink.500"
        />
      </Flex>
    );
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
