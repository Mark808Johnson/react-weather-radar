import './App.css';
import Header from './components/Header/Header'
import WeatherRadar from './components/WeatherRadar/WeatherRadar';
import WeatherProvider from './context/WeatherContext';

function App() {

  return (
    <>
      <WeatherProvider>
        <Header />
        <WeatherRadar />
      </WeatherProvider>
    </>
  )
}

export default App;
