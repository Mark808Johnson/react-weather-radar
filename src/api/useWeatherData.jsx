import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const fetchData = async (selectedCity, cities) => {
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
        const { lat, lon } = selectedCity;
        const weatherResponse = await axios.get(`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        const forecastResponse = await axios.get(`${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`)
        const data = [{ name: selectedCity.name, weatherData: weatherResponse.data, forecastData: forecastResponse.data }];
        return data;
      }
    } 
    
    catch (error) {
      console.error(error);
      return null;
    }
  }

export default fetchData;