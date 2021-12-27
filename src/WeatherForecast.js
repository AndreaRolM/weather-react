import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0acaa1de783699a7c805c0e5bad91ab8";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperatures"></div>
          <span className="WeatherForecast-temperatures-max">19º</span>
          <span className="WeatherForecast-temperatures-min">10º</span>
        </div>
      </div>
    </div>
  );
}
