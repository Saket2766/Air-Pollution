import mydata from "../data/states_india.json";
import { MapContainer, GeoJSON } from "react-leaflet";
import { Form } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import "./Mymap.css";
import { useEffect, useState, useCallback } from "react";
import { colourPalatte } from "../helper/helper";
import Legend from "./Legend";

function Mymap() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectoption, setSelectOption] = useState({
    element: "",
    year: "",
  });
  const [yourGeoJSONLayer, setYourGeoJSONLayer] = useState();
  // const GeoJSONEL = useRef(null);

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setSelectOption((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    const clickedLayer = event.target;
    const stateCode = clickedLayer.feature.properties.state_code;

    if (selectedState === stateCode) {
      setSelectedState(null); // Deselect the state if clicked again
    } else {
      setSelectedState(stateCode); // Select the clicked state
    }
  };

  useEffect(() => {
    if (yourGeoJSONLayer) {
      yourGeoJSONLayer.eachLayer((layer) => {
        const feature = layer.feature;
        oneachstate(feature, layer);
      });
    }
  }, [selectoption]);

  const oneachstate = useCallback(
    (feature, layer) => {
      layer.on({ click: handleClick });
      let showup = feature.properties.st_nm;
      const { element, year } = selectoption;
      if (
        element !== "" &&
        year !== "" &&
        Object.keys(feature.properties?.air).length &&
        feature.properties.air[year] &&
        feature.properties.air[year][element]
      ) {
        console.log("inside here");
        const val = feature.properties.air[year][element];
        showup = `${showup} - ${val}`;
      }
      layer.bindPopup(showup);
      //layer.options.fillColor = "pink";
    },
    [selectoption]
  );

  const mystyle = useCallback(
    (feature) => {
      const state_code = feature.properties.state_code;
      const { element, year } = selectoption;
      let fillColor = "white";
      if (
        element !== "" &&
        year !== "" &&
        feature.properties.air &&
        feature.properties.air[year] &&
        feature.properties.air[year][element]
      ) {
        console.log("inside here 222");
        const val = feature.properties.air[year][element];
        fillColor = colourPalatte(val, element);
      }
      // else if(element && year)
      // const fillColor = selectedState === state_code ? 'yellow' : 'red';
      const color = selectedState === state_code ? "gray" : "black";
      console.log("here 111");
      return {
        fillColor,
        fillOpacity: 1,
        color: "black",
        // background: 'orange'
        border: "12.5px",
        weight: 0.5,
      };
    },
    [selectoption]
  );

  return (
    <div className="DemographicForm">
      <div className="DemographicChecks">
        <Form>
          <Form.Group>
            <Form.Label>
              <h3>Element</h3>
            </Form.Label>
            <div className="DemographicLabels">
              <Form.Check
                type="radio"
                name="element"
                id="So2"
                label="So2"
                onChange={setInputValue}
                value={"So2"}
              />
              <Form.Check
                type="radio"
                name="element"
                id="No2"
                label="No2"
                onChange={setInputValue}
                value={"No2"}
              />
              <Form.Check
                type="radio"
                name="element"
                id="pm10"
                label="pm10"
                onChange={setInputValue}
                value={"pm10"}
              />
              <Form.Check
                type="radio"
                name="element"
                id="pm2.5"
                label="pm2.5"
                onChange={setInputValue}
                value={"pm2.5"}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h3>Year</h3>
            </Form.Label>
            <div className="DemographicYear">
              <Form.Check
                type="radio"
                name="year"
                id="2021"
                label="2021"
                onChange={setInputValue}
                value={"2021"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2020"
                label="2020"
                onChange={setInputValue}
                value={"2020"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2018"
                label="2018"
                onChange={setInputValue}
                value={"2018"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2017"
                label="2017"
                onChange={setInputValue}
                value={"2017"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2016"
                label="2016"
                onChange={setInputValue}
                value={"2016"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2015"
                label="2015"
                onChange={setInputValue}
                value={"2015"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2014"
                label="2014"
                onChange={setInputValue}
                value={"2014"}
              />
              <Form.Check
                type="radio"
                name="year"
                id="2013"
                label="2013"
                onChange={setInputValue}
                value={"2013"}
              />
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className="DemographicMap">
        <Legend element={selectoption.element}></Legend>
        <MapContainer
          style={{ height: "100vh", width: "77%" }}
          zoom={4.5}
          center={[23, 82]}
          
        >
          <GeoJSON
            ref={(layer) => setYourGeoJSONLayer(layer)}
            data={mydata.features}
            onEachFeature={oneachstate}
            style={mystyle}
          ></GeoJSON>
        </MapContainer>
      </div>
    </div>
  );
}

export default Mymap;
