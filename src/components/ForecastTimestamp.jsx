import './ForecastTimestamp.css'

function ForecastTimestamp({timestamp}) {

    console.log(timestamp)
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const time = timestamp.dt_txt.slice(11, 16)
    console.log(time)
    const iconCode = timestamp.weather[0].icon
    const icon = `${apiUrl}/img/w/${iconCode}.png`
    const temperature = timestamp.main.temp;
    
    

    // const city = weatherData.name;
    // const date = new Date(weatherData.dt * 1000).toLocaleString();
    // const iconCode = weatherData.weather[0].icon; 
    // const icon = `${apiUrl}/img/w/${iconCode}.png` 
    // const description = weatherData.weather[0].description;
    // const windSpeed = weatherData.wind.speed;
    // const temperature = Math.round(weatherData.main.temp);
    // const humidity = weatherData.main.humidity;
    // const precipitation = weatherData.main.humidity;

    return (
        <div className="forecast-timestamp">
            <p className="time">{time}</p>
            <img className="icon" src={icon}/>
            <p className="temperature" dangerouslySetInnerHTML={{__html: `${temperature.toFixed(0)}&deg;C`}}></p>
            
      </div>
    )
}

export default ForecastTimestamp;
