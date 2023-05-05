import React, { useContext } from 'react';
import CityWeather from './../CityWeather/CityWeather'
import CityForecast from './../CityForecast/CityForecast'
import './WeatherData.css'
import { WeatherContext } from "../../context/WeatherContext"

function WeatherData() {

  const { weatherDataResponse } = useContext(WeatherContext)

  return (
    <div className="weather-data">
      {weatherDataResponse.map((city, index) => (
        <div className="city" key={`city-${index}`}>
          <CityWeather key={"cityWeather" + index} weatherData={city.weatherData} />
          <CityForecast key={"cityForecast" + index} forecast={city.forecastData} />
        </div>
      ))}
    </div>
  )
}

export default WeatherData;
