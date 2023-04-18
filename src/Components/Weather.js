import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  const currentDisplay = useSelector(selectDisplay);

  const latitude = currentDisplay.capitalInfo.latlng[0];
  const longitude = currentDisplay.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "e8f25c5f04mshe0fdccc8d85f6a5p19619fjsne0f0f202af4a",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(weather);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Current Conditions: </td>
          <td>{weather && weather.current.condition.text}</td>
        </tr>
        <tr>
          <td>Current Temperature: </td>
          <td>{weather && weather.current.temp_f} degrees Farenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather && weather.current.feelslike_f} degrees Farenheit</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather && weather.current.humidity} %</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather && weather.current.wind_mph} mph</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
