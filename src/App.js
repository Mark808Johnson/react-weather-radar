import './App.css';
import Header from './components/Header/Header'
import StatusBar from './components/StatusBar/StatusBar';
import WeatherRadar from './components/WeatherRadar/WeatherRadar';
import WeatherProvider from './context/WeatherContext';

function App() {

  return (
    <>
      <WeatherProvider>
        <StatusBar />
        <Header />
        <WeatherRadar />
      </WeatherProvider>
    </>
  )
}

export default App;
