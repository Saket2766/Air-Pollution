import DropDownMenu from "../components/DropDownMenu";

const AllCharts = ({charts}) => {
  return (
    <div style={{flexGrow:1}}>
      <h1>All Charts</h1>
      {/* {children} */}
      {charts}
    </div>
  );
};
export default AllCharts;
