import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
