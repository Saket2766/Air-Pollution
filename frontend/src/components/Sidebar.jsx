import "../styles/Sidebar.css";

const Sidebar = ({showStatewise}) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-label">Visualizations</div>
      <div className="sidebar-item">Year Wise Comparison</div>
      <div className="sidebar-item" onClick={showStatewise}>Statewise Comparison</div>
      <div className="sidebar-item">Citywise Comparison for Each State</div>
      <div className="sidebar-item">City wise Comparison</div>
    </nav>
  );
};

export default Sidebar;
