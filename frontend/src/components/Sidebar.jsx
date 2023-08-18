import "../styles/Sidebar.css"

const Sidebar = () => {
    return ( 
    <nav className="sidebar">
        <div className="sidebar-label">
            Visualizations
        </div>
        <div className="sidebar-item">
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