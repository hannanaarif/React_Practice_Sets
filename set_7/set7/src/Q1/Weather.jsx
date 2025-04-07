/*
Create a React component that fetches weather data from an API endpoint
using useEffect hook and displays the current temperature, humidity, and wind speed on the
screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit
units for the temperature.
*/

import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/weather") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            temperature: 21,
            humidity: 50,
            windSpeed: 10,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Weather data not found.",
        });
      }
    }, 2000);
  });
};

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fakeFetch("https://example.com/api/weather")
      .then((response) => {
        if (response.status === 200) {
          setWeatherData(response.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  const convertTemperature = (temp) => {
    return isCelsius ? temp : (temp * 9) / 5 + 32;
  };

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Weather Information</h1>
      <p>Temperature: {convertTemperature(weatherData.temperature)}° {isCelsius ? "C" : "F"}</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} km/h</p>
      <button onClick={toggleTemperatureUnit}>
        Toggle to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default Weather;