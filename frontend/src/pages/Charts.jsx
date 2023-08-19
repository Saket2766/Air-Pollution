import { useState } from "react";
import AllCharts from "../components/AllCharts";
import Sidebar from "../components/Sidebar";
import DropdownComponent from "../components/BarChart/DropDownComponent";
import * as data from "../data/data.json";
import StateWise from "../components/BarChart/StateWise";
import CityWise from "../components/BarChart/CityWise";
import WithoutState from "../components/BarChart/WithoutState";

import "../styles/Charts.css";


const Charts = () => {
  const [charts,setCharts] = useState(<DropdownComponent data={data.default} />);

  const showStatewise = () => {
  setCharts(<StateWise data={data.default} />)
  }
  const showYearwise = () => {
    setCharts(<DropdownComponent data={data.default} />)
  }
  const showCitywiseForState = () => {
    setCharts(<CityWise data={data.default} />)
  }
  const showCitywise = () => {
    setCharts(<WithoutState data={data.default} />)
  }
  return (
    <div style={{display:"flex"}}>
      <Sidebar showStatewise = {showStatewise} 
      showYearwise={showYearwise}
      showCitywiseForState={showCitywiseForState}
      showCitywise={showCitywise}
      />
      <AllCharts charts={charts}/>
    </div>
  );
};

export default Charts;

