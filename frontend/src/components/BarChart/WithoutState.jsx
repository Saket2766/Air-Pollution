import { useState } from "react";
import Select from "react-select";
import Viz3 from "./Viz3";
import "../../styles/Chart.css";
// eslint-disable-next-line react/prop-types
const WithoutState = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedNewEle, setSelectedNewEle] = useState("");

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedElement(null);
    setSelectedCities([]);
  };

  const handleElementChange = (selectedOption) => {
    let elePm2 = "pm2.5";
    let elePm10 = "pm10";
    let eleSo2 = "So2";
    let eleNo2 = "No2";
    if (selectedOption.value === "AQI" && selectedYear) {
      setSelectedNewEle("AQI");
      if (elements.includes(elePm10)) {
        setSelectedElement(elePm10);
      } else if (elements.includes(elePm2)) {
        setSelectedElement(elePm2);
      } else if (elements.includes(eleSo2)) {
        setSelectedElement(eleSo2);
      } else if (elements.includes(eleNo2)) {
        setSelectedElement(eleNo2);
      }
    } else {
      setSelectedNewEle(selectedOption.value);
      setSelectedElement(selectedOption.value);
    }
    setSelectedCities([]);
  };

  const handleCityChange = (selectedOptions) => {
    setSelectedCities(selectedOptions);
  };

  const years = Object.keys(data).map((year) => ({
    value: year,
    label: year,
  }));

  let elements = [];
  if (selectedYear) {
    const firstState = Object.keys(data[selectedYear.value])[0];
    const firstCity = Object.keys(data[selectedYear.value][firstState])[0];
    if (firstCity) {
      elements = Object.keys(data[selectedYear.value][firstState][firstCity]);
    }
  }
  selectedYear && elements.push("AQI");
  let cityOptions = [];
  if (selectedYear && selectedElement) {
    Object.keys(data[selectedYear.value]).forEach((state) => {
      Object.keys(data[selectedYear.value][state]).forEach((city) => {
        if (data[selectedYear.value][state][city][selectedElement]) {
          cityOptions.push({
            value: city,
            label: city,
          });
        }
      });
    });
  }

  let selectedData = [];
  if (selectedYear && selectedElement && selectedCities.length > 0) {
    selectedCities.forEach((city) => {
      const stateKeys = Object.keys(data[selectedYear.value]);
      for (let i = 0; i < stateKeys.length; i++) {
        const state = stateKeys[i];
        if (data[selectedYear.value][state][city.value]) {
          const concentration =
            data[selectedYear.value][state][city.value][selectedElement];
          if (concentration) {
            selectedData.push({
              city: city.label,
              data: concentration,
            });
            break;
          }
        }
      }
    });
  }

  return (
    <div className="chartComp">
      <div>
        <h1>City Wise Comparison for all Cities</h1>
        <label>Select Year:</label>
        <Select
          options={years}
          onChange={handleYearChange}
          value={selectedYear}
          className="Year"
        />

        {selectedYear && (
          <>
            <label>Select Element:</label>
            <select
              value={selectedNewEle}
              onChange={(e) => handleElementChange({ value: e.target.value })}
              className="Element"
            >
              <option value="">Select</option>
              {elements.map((element) => (
                <option key={element} value={element}>
                  {element}
                </option>
              ))}
            </select>

            <label>Select Cities:</label>
            <Select
              options={cityOptions}
              onChange={handleCityChange}
              value={selectedCities}
              isMulti
              className="City"
            />
          </>
        )}
      </div>
      <div>
        {selectedCities.length > 0 && selectedElement && (
          <div>{selectedData != null && <Viz3 data={selectedData} />}</div>
        )}
      </div>
    </div>
  );
};

export default WithoutState;
