import { useState } from "react";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
const StateWise = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedState, setSelectedState] = useState([]);
  const [selectedElement, setSelectedElement] = useState("");
  const [elementData, setElementData] = useState([]);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
    setSelectedState([]);
    setSelectedElement("");
    setElementData([]);
  };

  const handleStateChange = (selectedOptions) => {
    setSelectedState(selectedOptions.map((option) => option.value));
    setSelectedElement("");
    setElementData([]);
  };

  const handleElementChange = (selectedOption) => {
    setSelectedElement(selectedOption.value);
    setElementData([]);

    if (selectedYear && selectedState.length > 0 && selectedElement) {
      const elementDataList = selectedState.flatMap((state) =>
        Object.keys(data[selectedYear][state]).flatMap(
          (city) => data[selectedYear][state][city][selectedElement]
        )
      );

      setElementData(elementDataList);
    }
  };

  const years = Object.keys(data).map((year) => ({
    value: year,
    label: year,
  }));
  const statesArray = Object.keys(data[selectedYear] || {}).map((state) => ({
    value: state,
    label: state,
  }));
  const elements =
    selectedYear && selectedState.length > 0
      ? Object.keys(
          data[selectedYear][selectedState[0]][
            Object.keys(data[selectedYear][selectedState[0]])[0]
          ]
        )
      : [];

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
            {selectedYear}:
          </h3>
          <pre>{JSON.stringify(elementData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default StateWise;
