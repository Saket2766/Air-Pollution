import "../styles/Sidebar.css";

const Sidebar = ({showStatewise,showYearwise,showCitywiseForState,showCitywise}) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-label">Visualizations</div>
      <div className="sidebar-item" onClick={showYearwise}>Year Wise Comparison</div>
      <div className="sidebar-item" onClick={showStatewise}>Statewise Comparison</div>
      <div className="sidebar-item" onClick={showCitywiseForState}>Citywise Comparison for Each State</div>
      <div className="sidebar-item" onClick={showCitywise}>City wise Comparison</div>
    </nav>
  );
};

export default Sidebar;
