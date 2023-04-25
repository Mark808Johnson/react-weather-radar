import ForecastTimestamp from './ForecastTimestamp.jsx';
import './CityForecast.css'

function CityForecast({forecast}) {

    return (
        <div className="city-forecast-container">
            {forecast.list.map((timestamp, index) => (
                <ForecastTimestamp key={index} timestamp={timestamp}/>
            ))} 
        </div>
    )
}

export default  CityForecast;
