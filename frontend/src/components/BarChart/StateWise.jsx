import { useState } from "react";
import Select from "react-select";
import Viz2 from "./Viz2";
import "../../styles/Chart.css";
// eslint-disable-next-line react/prop-types
const StateWise = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedNewEle, setSelectedNewEle] = useState("");

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedState([]);
    setSelectedElement("");
  };

  const handleStateChange = (selectedOptions) => {
    setSelectedState(selectedOptions.map((option) => option.value));
    setSelectedElement("");
    setSelectedNewEle("");
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
  };

  const years = Object.keys(data).map((year) => ({
    value: year,
    label: year,
  }));
  const statesArray = Object.keys(data[selectedYear?.value] || {}).map(
    (state) => ({
      value: state,
      label: state,
    })
  );
  const elements =
    selectedYear && selectedState.length > 0
      ? Object.keys(
          data[selectedYear.value][selectedState[0]][
            Object.keys(data[selectedYear.value][selectedState[0]])[0]
          ]
        )
      : [];

  selectedYear && selectedState && elements.push("AQI");
  let alldata2 = [];

  if (selectedYear && selectedElement && selectedState) {
    selectedState.forEach((st) => {
      let sum = 0;
      let cnt = 0;
      let median = 0;

      Object.keys(data[selectedYear.value][st]).forEach((city) => {
        if (
          data[selectedYear.value][st] &&
          data[selectedYear.value][st][city][selectedElement]
        )
          sum += data[selectedYear.value][st][city][selectedElement];
        cnt++;
      });

      median = sum / cnt;
      alldata2.push({
        state: st,
        data: Math.trunc(median),
      });
    });
  }

  return (
    <div className="chartComp">
      <div>
        <h1>State Wise</h1>
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
              value={statesArray.filter((state) =>
                selectedState.includes(state.value)
              )}
              isMulti
              className="State"
            />
          </>
        )}

        {selectedState.length > 0 && (
          <>
            <label>Select Element:</label>
            <br></br>
            <select
              value={selectedNewEle}
              onChange={(e) => handleElementChange({ value: e.target.value })}
              className="Element"
            >
              <option value="">Select...</option>
              {elements.map((element) => (
                <option key={element} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <div>{alldata2 != null && <Viz2 data={alldata2} />}</div>
    </div>
  );
};

export default StateWise;
