import axios from "axios";
import cities from "../data/cities";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const fetchData = async (selectedCity) => {
    try {
      if (selectedCity === "all") {
        const promises = cities.map(async (city) => {
          const { lat, lon } = city;
          const weatherResponse = await axios.get(`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
          const forecastResponse = await axios.get(`${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`)
          const [weatherData, forecastData] = await Promise.all([weatherResponse, forecastResponse])
          return {name: city.name, weatherData: weatherData.data, forecastData: forecastData.data}
        });

        const data = await Promise.all(promises);
        return data;
      } 
      
      else if (selectedCity === "none") 
      {
        return null;
      }
      
      else 
      {
        const { name, lat, lon } = selectedCity;
        const weatherResponse = await axios.get(`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        const forecastResponse = await axios.get(`${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`)
        const [weatherData, forecastData] = await Promise.all([weatherResponse, forecastResponse])
        const data = [{ name: name, weatherData: weatherData.data, forecastData: forecastData.data }];
        return data;
      }
    } 
    
    catch (error) {
      console.error(`ERROR: ${error}`);
      return null;
    }
  }

export default fetchData;