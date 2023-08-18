import { useState } from "react";
import StateViz from "./StateViz";
import "../../styles/Chart.css";
// eslint-disable-next-line react/prop-types
const DropDownComponent = ({ data }) => {
  //   const years = Object.keys(data);

  //   const [selectedYear, setSelectedYear] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedData, setSelectedData] = useState({
    year: "",
    state: "",
    city: "",
    element: "",
  });

  //selectedYear &&
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

  //   const handleYearChange = (event) => {
  //     setSelectedYear(event.target.value);
  //     setSelectedState("");
  //     setSelectedCity("");
  //     setSelectedElement("");
  //     setSelectedData((prev) => {
  //       return {
  //         ...prev,
  //         year: selectedYear,
  //       };
  //     });
  //   };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedElement("");
    setSelectedData((prev) => {
      return {
        ...prev,
        state: selectedState,
      };
    });
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedElement("");
    setSelectedData((prev) => {
      return {
        ...prev,
        city: selectedCity,
      };
    });
  };

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);

    if (selectedYear && selectedState && selectedCity && selectedElement) {
      setSelectedData(
        data[selectedYear][selectedState][selectedCity][selectedElement]
      );
    }
    setSelectedData((prev) => {
      return {
        ...prev,
        element: selectedElement,
      };
    });
  };
  let allData = [];
  if (selectedCity && selectedState && selectedElement) {
    // console.log(selectedCity, selectedState, selectedElement);
    for (let i = 2013; i < 2022; i++) {
      //   let st = i;
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
      <h1>Year Wise Comparison</h1>
      {/* <label>Select Year:</label>
      <select value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select> */}

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
      <select value={selectedCity} onChange={handleCityChange} className="City">
        <option value="">Select</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <label>Select Element:</label>
      <select
        value={selectedElement}
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

      {selectedData && (
        <div>
          <h3>
            Data for {selectedElement} in {selectedCity}, {selectedState},{" "}
            {selectedYear}:
          </h3>
        </div>
      )}
      {allData != null && <StateViz data={allData} />}
    </div>
  );
};
export default DropDownComponent;
