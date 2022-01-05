import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    return (
      <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">Tue</div>
        <WeatherIcon code="01d" size={32} />
        <div className="WeatherForecast-temperatures"></div>
        <span className="WeatherForecast-temperatures-max">19º</span>
        <span className="WeatherForecast-temperatures-min">10º</span>
      </div>
    );
}