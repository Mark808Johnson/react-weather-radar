import { createContext, useState } from 'react'

export const WeatherContext = createContext("")

const WeatherProvider = ({ children }) => {
    const [weatherDataResponse, setWeatherDataResponse] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null);
        
    const handleApiResponse = (data) => {
        setWeatherDataResponse(data)
    }

    const handleCitySelect = (city) => {
        setSelectedCity(city);
      };

    return (
        <WeatherContext.Provider
            value={{
                handleCitySelect, selectedCity, handleApiResponse, weatherDataResponse
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
