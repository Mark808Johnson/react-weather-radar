import "./Menu.css"

const Menu = (props) => {

  const handleCitySelect = (event) => {
    const selectedValue = event.target.value;
    let selectedCity = null;
    if (selectedValue === "all") {
      selectedCity = "all";
    }
    else if (selectedValue === "none") {
      selectedCity = "none";
    }

    else {
      selectedCity = props.cities.find(city => city.name === selectedValue);
    }

    props.onCitySelect(selectedCity)
  }

  const options = [
    <option className="option" key="none" value="none">-</option>,
    <option className="option" key="all" value="all">All Cities</option>,
    ...props.cities.map((city) => (
      <option className="option" key={city.name} value={city.name}>{city.name}</option>
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

export default Menu;
