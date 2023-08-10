// import { useState } from "react";

import Select from "react-select";

// eslint-disable-next-line react/prop-types
const ChartDropdown = ({ Options }) => {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={Options[0]}
        name="color"
        options={Options}
      />
    </>
  );
};

export default ChartDropdown;
