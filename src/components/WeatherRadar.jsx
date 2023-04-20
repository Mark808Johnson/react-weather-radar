import cities from './../cities'
import { useState, useEffect } from 'react'
import Menu from './Menu'
import axios from 'axios'
import './WeatherRadar.css' 
import WeatherData from './WeatherData'

function WeatherRadar() {

  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.WEATHER_RADAR_API_KEY;
  const apiUrl = process.env.WEATHER_RADAR_API_URL;

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (selectedCity) {
      const {name, lat, lon} = selectedCity;
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              q: name, 
              lat: lat,
              lon: lon,
              appid: apiKey,
              units: "metric",
            },
          })
          setWeatherData(response.data);
      } catch (error) {
        console.error(error)
      }
    };

    fetchWeatherData();
    }
  }, [selectedCity, apiKey]);

  return (
    <div className="weather-radar">
        <div className="menu-container">
            <Menu cities={cities} onCitySelect={handleCitySelect} />
        </div>
        {weatherData && (
          <WeatherData city={selectedCity} data={weatherData}/>
        
        )}
    </div>
  )
}

export default WeatherRadar;