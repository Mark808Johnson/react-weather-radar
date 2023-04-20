import React from 'react';

function WeatherData(props) {
  const { city, data } = props;

  return (
    <div className="weather-data">
      <h2>{city.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed}m/s</p>
    </div>
  );
}

export default WeatherData;
