import DropdownComponent from "./DropDownComponent";
import * as data from "../data/data.json";
import StateWise from "./BarChart/StateWise";

const DropDownMenu = () => {
  return (
    <div>
      <DropdownComponent data={data.default} />
      <StateWise data={data.default} />
    </div>
  );
};

export default DropDownMenu;
