import { useState } from "react";
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

  const clickYearwise = () => {
    showYearwise();
    toggleHidden();
  }

  const clickStatewise = () => {
    showStatewise();
    toggleHidden();
  }

  const clickCitywiseForState = () => {
    showCitywiseForState();
    toggleHidden();
  }

  const clickCitywise = () => {
    showCitywise();
    toggleHidden();
  }


  return (
    <>
      <div className="hamburger" onClick={toggleHidden}>
        <img className="menu-icon" src={`${active?"/cross.svg":"/hamburger.svg"}`} alt="ham" />
      </div>
      <nav className={`sidebar ${active ? "" : "hidden"}`}>
        <div className="sidebar-label">Visualizations</div>
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
      </nav>
    </>
  );
};

export default Sidebar;
