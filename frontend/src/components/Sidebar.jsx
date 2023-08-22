import { useState } from "react";
import "../styles/Sidebar.css";
import { Lightbulb } from "lucide-react";

const Sidebar = ({
  // eslint-disable-next-line react/prop-types
  showStatewise,
  // eslint-disable-next-line react/prop-types
  showYearwise,
  // eslint-disable-next-line react/prop-types
  showCitywiseForState,
  // eslint-disable-next-line react/prop-types
  showCitywise,
  // eslint-disable-next-line react/prop-types
  showDemographic,
}) => {
  const [active, setActive] = useState(false);
  const toggleHidden = () => {
    setActive(!active);
  };

  const clickYearwise = () => {
    showYearwise();
    toggleHidden();
  };

  const clickStatewise = () => {
    showStatewise();
    toggleHidden();
  };

  const clickCitywiseForState = () => {
    showCitywiseForState();
    toggleHidden();
  };

  const clickCitywise = () => {
    showCitywise();
    toggleHidden();
  };
  const clickDemographic = () => {
    showDemographic();
    toggleHidden();
  };

  return (
    <div className="sidebar-container">
      <div className="hamburger" onClick={toggleHidden}>
        <img
          className="menu-icon"
          src={`${active ? "/cross.svg" : "/hamburger.svg"}`}
          alt="ham"
        />
      </div>
      <nav className={`sidebar ${active ? "" : "hidden"}`}>
        <div className="sidebar-label">
          <Lightbulb />
          Visualizations
        </div>
        <div className="sidebar-item" onClick={clickYearwise}>
          Year Wise Comparison
        </div>
        <div className="sidebar-item" onClick={clickStatewise}>
          Statewise Comparison
        </div>
        <div className="sidebar-item" onClick={clickCitywiseForState}>
          Citywise Comparison for Each State
        </div>
        <div className="sidebar-item" onClick={clickCitywise}>
          City wise Comparison
        </div>
        <div className="sidebar-item" onClick={clickDemographic}>
          Demographic Graph
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
