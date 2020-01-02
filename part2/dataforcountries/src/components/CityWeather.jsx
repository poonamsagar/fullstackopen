import React, { useState, useEffect } from "react";
import axios from "axios";
const CityWeather = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const hook = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_access_key}&query=${city}`
      )
      .then(response => {
        setCurrentWeather(response.data.current);
        setLoading(false);
      });
  };
  useEffect(hook, []);
  return (
    <>
      {loading ? (
        <h3>Getting weather information...</h3>
      ) : (
        <>
          <h3>Weather in {city}</h3>
          <div>
            <b>temperature: </b>
            {`${currentWeather.temperature} Celsius`}
          </div>
          {<img src={currentWeather.weather_icons[0]} alt="weather icon" />}
          <div>
            <b>wind: </b>
            {`${currentWeather.wind_speed} direction ${currentWeather.wind_dir}`}
          </div>
        </>
      )}
    </>
  );
};
export default CityWeather;
