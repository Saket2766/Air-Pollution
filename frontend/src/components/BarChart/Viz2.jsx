import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../styles/VizStyles.css";

export default function Viz2(prop) {
  const data = prop.data;
  return (
    <div className="chart">
      <ResponsiveContainer width="200%" height="130%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* STATE WISE */}
          <CartesianGrid strokeDasharray="3 3" />
          <Legend
            className="Legend"
            verticalAlign="top"
            // width={1000}
            layout="vertical"
            align="right"
            // margin={{left:1130}}
            iconSize={20}
          />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="data" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
