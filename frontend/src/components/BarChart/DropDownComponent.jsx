import { useState } from "react";
import StateViz from "./StateViz";
import "../../styles/Chart.css";

// eslint-disable-next-line react/prop-types
const DropDownComponent = ({ data }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedNewEle, setSelectedNewEle] = useState("");

  let selectedYear = "2021";
  const states = data[selectedYear] ? Object.keys(data[selectedYear]) : [];
  const cities =
    selectedState && data[selectedYear] && data[selectedYear][selectedState]
      ? Object.keys(data[selectedYear][selectedState])
      : [];
  const elements =
    selectedCity &&
    data[selectedYear] &&
    data[selectedYear][selectedState] &&
    data[selectedYear][selectedState][selectedCity]
      ? Object.keys(data[selectedYear][selectedState][selectedCity])
      : [];
  selectedCity && elements.push("AQI");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedElement("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedElement("");
  };
  const handleElementChange = (event) => {
    let elePm2 = "pm2.5";
    let elePm10 = "pm10";
    let eleSo2 = "So2";
    let eleNo2 = "No2";
    if (
      event.target.value === "AQI" &&
      selectedYear &&
      selectedState &&
      selectedCity
    ) {
      setSelectedNewEle("AQI");
      if (data[selectedYear][selectedState][selectedCity][elePm10]) {
        setSelectedElement(elePm10);
      } else if (data[selectedYear][selectedState][selectedCity][elePm2]) {
        setSelectedElement(elePm2);
      } else if (data[selectedYear][selectedState][selectedCity][eleSo2]) {
        setSelectedElement(eleSo2);
      } else if (data[selectedYear][selectedState][selectedCity][eleNo2]) {
        setSelectedElement(eleNo2);
      }
    } else {
      setSelectedElement(event.target.value);
      setSelectedNewEle(event.target.value);
    }
  };
  let allData = [];
  if (selectedCity && selectedState && selectedElement) {
    for (let i = 2013; i < 2022; i++) {
      let ele = selectedElement;
      if (
        data[i] &&
        data[i][selectedState] &&
        data[i][selectedState][selectedCity]
      ) {
        allData.push({
          year: i,
          data: data[i][selectedState][selectedCity][ele],
        });
      }
    }
    console.log(allData);
  }

  return (
    <div className="chartComp">
      <div>
        <h1>Year Wise Comparison</h1>
        <label>Select State:</label>
        <select
          value={selectedState}
          onChange={handleStateChange}
          className="State"
        >
          <option value="">Select</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label>Select City:</label>
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="City"
        >
          <option value="">Select</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label>Select Element:</label>

        <select
          value={selectedNewEle}
          onChange={handleElementChange}
          className="Element"
        >
          <option value="">Select</option>
          {elements.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
      <div>{allData != null && <StateViz data={allData} />}</div>
    </div>
  );
};
export default DropDownComponent;
