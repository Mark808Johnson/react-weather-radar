import "./Menu.css"
import { memo } from "react";

const Menu = memo((props) => {
  const handleCitySelect = (event) => {
    const selectedValue = event.target.value;
    let selectedCity = null;
    // if (selectedValue === "all"){
    //   selectedCity = "all";
    // }
    // else 
    // {
      selectedCity = props.cities.find(city => city.name == selectedValue);
    // }

    props.onCitySelect(selectedCity)
  }

  const options = [
    // <option key="all" value="all">All Cities</option>,
    // ...props.cities.map((city) => (
    props.cities.map((city) => (
    <option key={city.name} value={city.name}>{city.name}</option>
  ))
  ];

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
