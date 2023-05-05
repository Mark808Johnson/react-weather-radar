import { useContext} from 'react';
import { WeatherContext } from "../../context/WeatherContext";
import "./Menu.css"
import cities from "../../data/cities";

const Menu = () => {

  const { handleCitySelect } = useContext(WeatherContext)

  const onCitySelect = (event) => {
    
    const selectedValue = event.target.value;
    let selectedCity = null;
    if (selectedValue === "all") {
      selectedCity = "all";
    }
    else if (selectedValue === "none") {
      selectedCity = "none";
    }

    else {
      selectedCity = cities.find(city => city.name === selectedValue);
    }
    
    handleCitySelect(selectedCity)
  }

  const options = [
    <option className="option" key="none" value="none">-</option>,
    <option className="option" key="all" value="all">All Cities</option>,
    ...cities.map((city) => (
      <option className="option" key={city.name} value={city.name}>{city.name}</option>
    ))
  ];

  return (
    <div className="menu">
      <select onChange={onCitySelect}>
        {options}
      </select>
    </div>
  );
}

export default Menu;
