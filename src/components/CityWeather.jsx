import './CityWeather.css'

function CityWeather({weatherData}) {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const city = weatherData.name;
    const date = new Date(weatherData.dt * 1000).toLocaleString();
    const iconCode = weatherData.weather[0].icon; 
    const icon = `${apiUrl}/img/w/${iconCode}.png` 
    const description = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed;
    const temperature = Math.round(weatherData.main.temp);
    const humidity = weatherData.main.humidity;
    const precipitation = weatherData.main.humidity;
    
    return (
        <div className="city-weather-container">
            <div className="left-column">
                <div className="top-corner">
                    <p className="city">{city}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="bottom-corner">
                    <p className="date">{date}</p>
                </div>
            </div>
            <div className="right-column">
                <div className="icon-temperature-container">
                    <img className="icon" src={icon}/>
                    <p className="temperature" dangerouslySetInnerHTML={{__html: `${temperature.toFixed(0)}&deg;C`}}></p>
                </div>
                <div className='wind-humidity-precipitation-container'>
                    <p className="wind-humidity-precipitation">Wind: {windSpeed} m/s</p>
                    <p className="wind-humidity-precipitation">Humidity: {humidity}%</p>
                    <p className="wind-humidity-precipitation">Precipitation (3h): {precipitation} mm</p>
                </div>
            </div>
      </div>
  )
}

export default CityWeather;
