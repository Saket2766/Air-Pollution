import { useState } from "react";
import AllCharts from "../components/AllCharts";
import DropDownMenu from "../components/DropDownMenu";
import Sidebar from "../components/Sidebar";
import DropdownComponent from "../components/BarChart/DropDownComponent";
import * as data from "../data/data.json";
import StateWise from "../components/BarChart/StateWise";
import CityWise from "../components/BarChart/CityWise";
import WithoutState from "../components/BarChart/WithoutState";

import "../styles/Charts.css";


const Charts = () => {
  const [charts,setCharts] = useState(<DropDownMenu/>);

  const showStatewise = () => {
  setCharts(<DropDownMenu/>)
  }
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <AllCharts>
      </AllCharts>
    </div>
  );
};

export default Charts;

