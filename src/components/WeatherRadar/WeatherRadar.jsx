import WeatherContext from "../../contexts/WeatherContext";
import cities from "../../data/cities";
import { useState, useEffect } from "react";
import Menu from "./../Menu/Menu";
import "./WeatherRadar.css";
import WeatherData from "../WeatherData/WeatherData";
import fetchData from "../../api/useWeatherData";
import ReactLoading from "react-loading";

function WeatherRadar() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (selectedCity) {
      setLoading(true);
      fetchData(selectedCity, cities).then((data) => {
        setTimeout(() => {
          setResponseData(data);
          setLoading(false);
        }, 100);
      }, []);
    }
  }, [selectedCity]);

  return (

    <WeatherContext.Provider value={{responseData}}>
      <div className="weather-radar">
        <Menu cities={cities} onCitySelect={handleCitySelect} />
        {loading ? (
          <div className="loading-spinner">
            <ReactLoading type="spin" color="blue" height={50} width={50} />
          </div>
        ) : responseData ? (
          <div className="fade-in">
            <WeatherData />
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Please select a city.</p>
        )}
      </div>
    </WeatherContext.Provider>
  );
}

export default WeatherRadar;
