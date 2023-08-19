import { useState } from "react";
import Select from "react-select";
import Viz3 from "./Viz3";
import "../../styles/Chart.css";

// eslint-disable-next-line react/prop-types
const StateWise = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedNewEle, setSelectedNewEle] = useState("");

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedState(null);
    setSelectedElement("");
    setSelectedCities([]);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedElement("");
    setSelectedCities([]);
  };

  const handleElementChange = (selectedOption) => {
    let elePm2 = "pm2.5";
    let elePm10 = "pm10";
    let eleSo2 = "So2";
    let eleNo2 = "No2";
    if (selectedOption.value === "AQI" && selectedYear && selectedState) {
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

  const elements =
    selectedYear && selectedState
      ? Object.keys(
          data[selectedYear.value][selectedState.value][
            Object.keys(data[selectedYear.value][selectedState.value])[0]
          ]
        )
      : [];

  selectedYear && selectedState && elements.push("AQI");
  const statesArray = Object.keys(data[selectedYear?.value] || {}).map(
    (state) => ({
      value: state,
      label: state,
    })
  );

  const cityOptions =
    selectedYear && selectedState && selectedElement
      ? Object.keys(data[selectedYear.value][selectedState.value])
          .filter(
            (city) =>
              data[selectedYear.value][selectedState.value][city][
                selectedElement
              ]
          )
          .map((city) => ({
            value: city,
            label: city,
          }))
      : [];

  let alldata3 = [];
  if (
    selectedYear &&
    selectedElement &&
    selectedState &&
    selectedCities.length > 0
  ) {
    selectedCities.forEach((city) => {
      if (
        data[selectedYear.value][selectedState.value][city.value] &&
        data[selectedYear.value][selectedState.value][city.value][
          selectedElement
        ]
      ) {
        const concentration =
          data[selectedYear.value][selectedState.value][city.value][
            selectedElement
          ];
        alldata3.push({
          city: city.label,
          data: concentration,
        });
      }
    });
  }
  console.log(selectedNewEle);
  return (
    <div className="chartComp">
      <div>
        <h1>City Wise Comparison for Each State</h1>
        <label>Select Year:</label>
        <Select
          options={years}
          onChange={handleYearChange}
          value={selectedYear}
          className="Year"
        />

        {selectedYear && (
          <>
            <label>Select State:</label>
            <Select
              options={statesArray}
              onChange={handleStateChange}
              value={selectedState}
              className="State"
            />

            {selectedState && (
              <>
                <label>Select Element:</label>
                {/* <Select
                  options={elements.map((element) => ({
                    value: element,
                    label: element,
                  }))}
                  value={selectedNewEle}
                  onChange={handleElementChange}
                  className="Element"
                /> */}
                <select
                  value={selectedNewEle}
                  onChange={(e) =>
                    handleElementChange({ value: e.target.value })
                  }
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
          </>
        )}
      </div>
      <div>{alldata3 != null && <Viz3 data={alldata3} />}</div>
    </div>
  );
};

export default StateWise;
