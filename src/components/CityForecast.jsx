import ForecastTimestamp from './ForecastTimestamp.jsx';
import './CityForecast.css'

function CityForecast({forecast}) {

    return (
        <div className="city-forecast-container">
            {forecast.list.map((timestamp, index) => (
                <div key={index}>
                    <ForecastTimestamp timestamp={timestamp}/>
                </div>
            ))} 
        </div>
    )
}

export default  CityForecast;
