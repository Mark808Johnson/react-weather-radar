import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import Menu from "./../Menu/Menu";
import "./WeatherRadar.css";
import WeatherData from "../WeatherData/WeatherData";
import fetchData from "../../api/useWeatherData";
import ReactLoading from "react-loading";

function WeatherRadar() {
  const {selectedCity, handleApiResponse, weatherDataResponse} = useContext(WeatherContext) 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      setLoading(true);
      fetchData(selectedCity).then((data) => {
        setTimeout(() => {
          handleApiResponse(data);
          setLoading(false);
        }, 100);
      }, []);
    }
  }, [selectedCity]);

  return (

    <div className="weather-radar">
        <Menu />
        {loading ? (
          <div className="loading-spinner">
            <ReactLoading type="spin" color="blue" height={50} width={50} />
          </div>
        ) : weatherDataResponse ? (
          <div className="fade-in">
            <WeatherData />
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Please select a city.</p>
        )}
      </div>
    );
}

export default WeatherRadar;
