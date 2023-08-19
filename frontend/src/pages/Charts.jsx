import AllCharts from "../components/AllCharts";
import Sidebar from "../components/Sidebar";

import "../styles/Charts.css";

const Charts = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <AllCharts />
    </div>
  );
};

export default Charts;

