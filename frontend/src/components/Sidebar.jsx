import "../styles/Sidebar.css"

const Sidebar = ({showStatewise}) => {
    return ( 
    <nav className="sidebar">
        <div className="sidebar-label">
            Visualizations
        </div>
        <div className="sidebar-item" onClick={showStatewise}>
            Statewise
        </div>
        <div className="sidebar-item">
            Citywise
        </div>
        <div className="sidebar-item">
            Without State
        </div>
    </nav>
     );
}
 
export default Sidebar;