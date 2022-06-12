import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "../../context/LocationContext";
import LoadingAnimation from "../LoadingAnimation";

function Weather() {
  const { location, isLoading, setIsLoading } = useLocation();

  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getWeatherList = async () => {
      if (location.lat && location.lon) {
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        const newWeatherList = data.daily.map((data, key) => {
          let day = new Date(data.dt * 1000).toLocaleDateString("en-EN", {
            weekday: "long",
          });
          let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          let { description } = data.weather[0];
          let { min, max } = data.temp;

          return (
            <li className="list-group-item border-0" key={key}>
              <p className="fw-semibold text-black-50">{day}</p>
              <img src={icon} alt={description} />
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">{max}°</span>
                <span className="fw-semibold text-black-50">{min}°</span>
              </div>
            </li>
          );
        });

        setWeatherList(newWeatherList);
        setIsLoading(false);
      }
    };

    getWeatherList();
  }, [location, setIsLoading]);

  return (
    <div className="mt-3">
      <ul className="list-group list-group-horizontal-lg weather-list">
        {isLoading ? <LoadingAnimation /> : weatherList}
      </ul>
    </div>
  );
}

export default Weather;
