import { useState } from "react";
import Select from "react-select";
import Viz2 from "../Viz2";
// eslint-disable-next-line react/prop-types
const StateWise = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedElement, setSelectedElement] = useState("");

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedState([]);
    setSelectedElement("");
  };

  const handleStateChange = (selectedOptions) => {
    setSelectedState(selectedOptions.map((option) => option.value));
    setSelectedElement("");
  };

  const handleElementChange = (selectedOption) => {
    setSelectedElement(selectedOption.value);
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
    <div>
      <label>Select Year:</label>
      <Select
        options={years}
        onChange={handleYearChange}
        value={selectedYear}
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
          />
        </>
      )}

      {selectedState.length > 0 && (
        <>
          <label>Select Element:</label>
          <select
            value={selectedElement}
            onChange={(e) => handleElementChange({ value: e.target.value })}
          >
            <option value="">Select</option>
            {elements.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedState.length > 0 && selectedElement && (
        <div>
          <h3>
            Data for {selectedElement} in {selectedState.join(", ")} for{" "}
            {selectedYear.label}:
          </h3>
        </div>
      )}
      {alldata2 != null && <Viz2 data={alldata2} />}
    </div>
  );
};

export default StateWise;
