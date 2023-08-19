import { useRef, useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({
  showStatewise,
  showYearwise,
  showCitywiseForState,
  showCitywise,
}) => {
  const [active, setActive] = useState(false);

  const toggleHidden = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleHidden}>
        <img className="menu-icon" src={`${active?"/cross.svg":"/hamburger.svg"}`} alt="ham" />
      </div>
      <nav className={`sidebar ${active ? "" : "hidden"}`}>
        <div className="sidebar-label">Visualizations</div>
        <div className="sidebar-item" onClick={showYearwise}>
          Year Wise Comparison
        </div>
        <div className="sidebar-item" onClick={showStatewise}>
          Statewise Comparison
        </div>
        <div className="sidebar-item" onClick={showCitywiseForState}>
          Citywise Comparison for Each State
        </div>
        <div className="sidebar-item" onClick={showCitywise}>
          City wise Comparison
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
