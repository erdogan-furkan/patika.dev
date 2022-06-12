import "alertifyjs/build/css/alertify.min.css";
import axios from "axios";
import alertify from "alertifyjs";
import { useEffect, useState } from "react";
import { useLocation } from "../../context/LocationContext";
import LoadingAnimation from "../LoadingAnimation";

function Form() {
  const { location, setLocation, isLoading } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      axios(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
      ).then(({ data }) => {
        data.length > 0
          ? setLocation({
              lat: data[0].lat,
              lon: data[0].lon,
              name: data[0].display_name,
            })
          : alertify.error("No exacts match found");
      });
    }
  }, [query, setLocation]);

  useEffect(() => {
    const onLocationFound = (location) => {
      const { latitude, longitude } = location.coords;
      axios(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      ).then(({ data }) =>
        setLocation({ lat: latitude, lon: longitude, name: data.display_name })
      );
    };

    const onLocationFoundError = (error) => {
      alertify.error(error.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onLocationFound,
        onLocationFoundError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [setLocation]);

  const handleLocationSubmit = (e) => {
    e.preventDefault();

    const newQuery = e.target.location.value.trim().toLowerCase();
    setQuery(newQuery);
  };

  return (
    <div className="location-form">
      <form onSubmit={handleLocationSubmit}>
        <input
          type="text"
          placeholder="Type to search..."
          name="location"
          className="search-bar"
        />
      </form>
      <h5 className="fw-semibold">
        {isLoading ? <LoadingAnimation /> : location.name}
      </h5>
    </div>
  );
}

export default Form;
