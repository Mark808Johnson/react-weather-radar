import cities from './../cities'
import { useState, useEffect } from 'react'
import Menu from './Menu'
import axios from 'axios'
import './WeatherRadar.css' 
import WeatherData from './WeatherData'

function WeatherRadar() {

  const [selectedCity, setSelectedCity] = useState(null)
  const [responseData, setResponseData] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      if (selectedCity === "all") {
        const promises = cities.map(async (city) => {
          const { lat, lon } = city;
          const weatherResponse = await axios.get(`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
          const forecastResponse = await axios.get(`${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`)
          const [weatherData, forecastData] = await Promise.all([weatherResponse, forecastResponse])
          return {name: city.name, weatherData: weatherData.data, forecaseData: forecastData.data}
        });

        const data = await Promise.all(promises);
        setResponseData(data)
      } 
      
      else 
      {
        const { lat, lon } = selectedCity;
        const weatherResponse = await axios.get(`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        const forecastResponse = await axios.get(`${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`)
        setResponseData([{ name: selectedCity.name, weatherData: weatherResponse.data, forecastData: forecastResponse.data }]);
      }
      setLoading(false);
    } 
    
    catch (error) {
      console.error(error);
      setLoading(false)
    }
  }
    
  useEffect(() => {
    if (selectedCity) {
      setLoading(true);
      fetchData();
    }
  }, [selectedCity]);
  
  return (
    <div className="weather-radar">
        <Menu cities={cities} onCitySelect={handleCitySelect} />
        {responseData && (
        <WeatherData data={responseData}/>
        )}
    </div>
  )
}


export default WeatherRadar;