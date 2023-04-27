import './CityWeather.css'
import moment from 'moment';

function CityWeather({ weatherData }) {

    const apiUrl = process.env.REACT_APP_API_URL;
    const city = weatherData.name;
    const description = weatherData.weather[0].description;

    const dateTime = new Date(weatherData.dt * 1000).toLocaleString();
    const date = moment(dateTime.slice(0, 10), 'DD/MM/YYYY')
    const formattedDate = date.format('MMMM Do')
    const time = dateTime.slice(12, 17);

    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `${apiUrl}/img/w/${iconCode}.png`
    const temperature = Math.round(weatherData.main.temp);

    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;

    let precipitation;
    if ("rain" in weatherData) {
        precipitation = weatherData.rain['3h']
    }

    else {
        precipitation = 0;
    }

    return (
        <div className="city-weather-container">
            <div className="left-column">
                <div className="city-description-container">
                    <p className="city">{city}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="date-time-container">
                    <p className="date">{formattedDate}</p>
                    <p className="time">{time}</p>
                </div>
            </div>
            <div className="right-column">
                <div className="icon-temperature-container">
                    <img className="icon" src={iconUrl} alt="weather icon" />
                    <p className="temperature" dangerouslySetInnerHTML={{ __html: `${temperature.toFixed(0)}&deg;C` }}></p>
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
