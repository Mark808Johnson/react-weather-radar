import React from 'react';
import CityWeather from './../CityWeather/CityWeather'
import CityForecast from './../CityForecast/CityForecast'
import './WeatherData.css'

function WeatherData({ data }) {

  return (
    <div className="weather-data">
      {data.map((city, index) => (
        <>
          <CityWeather key={"cityWeather" + index} weatherData={city.weatherData} />
          <CityForecast key={"cityForecast" + index} forecast={city.forecastData} />
        </>
      ))}
    </div>
  )
}

export default WeatherData;
