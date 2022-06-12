import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    lat: "41.009",
    lon: "28.966",
    name: "Istanbul, Fatih, Istanbul, Marmara Region, 34126, Turkey",
  });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, isLoading, setIsLoading }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext(LocationContext);

export { LocationProvider, useLocation };
