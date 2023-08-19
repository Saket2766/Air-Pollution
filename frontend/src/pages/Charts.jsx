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

const [charts,setCharts] = useState(<DropDownMenu/>);

const showStatewise = () => {
  setCharts(<StateWise data={data.default} />)
}

const Charts = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar showStatewise={showStatewise}/>
      <AllCharts charts={charts}/>
    </div>
  );
};

export default Charts;

