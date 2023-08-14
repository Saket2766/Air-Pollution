import { useState } from "react";
import Select from "react-select";
import Viz3 from "../Viz3";

// eslint-disable-next-line react/prop-types
const StateWise = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    setSelectedState(null);
    setSelectedElement(null);
    setSelectedCities([]);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCities([]);
  };

  const handleElementChange = (selectedOption) => {
    setSelectedElement(selectedOption);
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
                selectedElement.value
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
          selectedElement.value
        ]
      ) {
        const concentration =
          data[selectedYear.value][selectedState.value][city.value][
            selectedElement.value
          ];
        alldata3.push({
          city: city.label,
          data: concentration,
        });
      }
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
            value={selectedState}
          />

          {selectedState && (
            <>
              <label>Select Element:</label>
              <Select
                options={elements.map((element) => ({
                  value: element,
                  label: element,
                }))}
                onChange={handleElementChange}
                value={selectedElement}
              />

              <label>Select Cities:</label>
              <Select
                options={cityOptions}
                onChange={handleCityChange}
                value={selectedCities}
                isMulti
              />
            </>
          )}
        </>
      )}

      {selectedCities.length > 0 && selectedElement && (
        <div>
          <h3>
            Data for {selectedElement.label} in {selectedState.label},{" "}
            {selectedCities.map((city) => city.label).join(", ")} for{" "}
            {selectedYear.label}:
          </h3>
        </div>
      )}
      {alldata3 != null && <Viz3 data={alldata3} />}
    </div>
  );
};

export default StateWise;
