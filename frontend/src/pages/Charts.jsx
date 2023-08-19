import AllCharts from "../components/AllCharts";
import DropDownMenu from "../components/DropDownMenu";
import Sidebar from "../components/Sidebar";

import "../styles/Charts.css";

const Charts = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <AllCharts charts={<DropDownMenu/>}/>
    </div>
  );
};

export default Charts;

