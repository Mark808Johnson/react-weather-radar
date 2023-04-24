import ForecastTimestamp from './ForecastTimestamp.jsx';
import './CityForecast.css'

function CityForecast({forecast}) {

    console.log(forecast.list)

    return (
        <div className="city-forecast">
            {forecast.list.map((timestamp, index) => (
                <div key={index}>
                    <ForecastTimestamp timestamp={timestamp}/>
                </div>
            ))} 
        </div>
    )
}

export default  CityForecast;
