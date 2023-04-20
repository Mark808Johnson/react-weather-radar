import "./Menu.css"
import { memo } from "react";

const Menu = memo((props) => {
  const handleCitySelect = (event) => {
    const selectedCity = props.cities.find(city => city.name == event.target.value);
    props.onCitySelect(selectedCity)
  }
  
  const options = props.cities.map((city) => (
    <option key={city.name} value={city.name}>{city.name}</option>
  ));

  return (
    <div className="menu">
      <select onChange={handleCitySelect}>
        {options}
      </select>
    </div>
  );
}
)

export default Menu;
