import DropdownComponent from "./DropDownComponent";
import * as data from "../data/data.json";

const DropDownMenu = () => {
  return (
    <div>
      <DropdownComponent data={data.default} />
    </div>
  );
};

export default DropDownMenu;
