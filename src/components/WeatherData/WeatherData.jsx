import React, { useContext } from 'react';
import CityWeather from './../CityWeather/CityWeather'
import CityForecast from './../CityForecast/CityForecast'
import './WeatherData.css'
import WeatherContext from "../../contexts/WeatherContext"

function WeatherData() {

  const { responseData } = useContext(WeatherContext)

  return (
    <div className="weather-data">
      {responseData.map((city, index) => (
        <>
          <CityWeather key={"cityWeather" + index} weatherData={city.weatherData} />
          <CityForecast key={"cityForecast" + index} forecast={city.forecastData} />
        </>
      ))}
    </div>
  )
}

export default WeatherData;
