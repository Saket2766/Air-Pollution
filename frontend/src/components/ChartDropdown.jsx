// import { useState } from "react";

import Select from "react-select";

<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
const ChartDropdown = ({ Options }) => {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);
=======

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);
>>>>>>> f4b85918320a209f9568bfd0ed2794ea364f4ce1

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
