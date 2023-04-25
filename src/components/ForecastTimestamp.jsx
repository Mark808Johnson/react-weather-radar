import './ForecastTimestamp.css'

function ForecastTimestamp({timestamp}) {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const time = timestamp.dt_txt.slice(11, 16)
    const iconCode = timestamp.weather[0].icon
    const icon = `${apiUrl}/img/w/${iconCode}.png`
    const temperature = timestamp.main.temp;
    
    const windSpeed = timestamp.wind.speed;
    const humidity = timestamp.main.humidity;
    
    let precipitation;
    if ("rain" in timestamp) {
        precipitation = timestamp.rain['3h']
    }

    else {
        precipitation = 0;
    }

    return (
        <div className="forecast-timestamp">
            <div className="time-icon-temp-container">
                <p className="time">{time}</p>
                <img className="icon" src={icon}/>
                <p className="temperature" dangerouslySetInnerHTML={{__html: `${temperature.toFixed(0)}&deg;C`}}></p>
            </div>
            <div className="wind-humidity-rain-container">
                <p className="wind">{windSpeed} m/s</p>
                <p className='humidity'>{humidity} %</p>
                <p className='precipitation'>{precipitation} mm</p>
            </div>
            
      </div>
    )
}

export default ForecastTimestamp;
