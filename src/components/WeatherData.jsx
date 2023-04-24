import React from 'react';
import CityWeather from './CityWeather'
import CityForecast from './CityForecast'
import './WeatherData.css'

function WeatherData(props) {
  const { data } = props;
  
  return (
    <div className="weather-data">
      {data.map((city, index) => (
        <div key={index}>
          <CityWeather weatherData={city.weatherData}/>
          <CityForecast forecast={city.forecastData}/>
        </div>
      ))}
    </div>
  )
}

export default WeatherData;
