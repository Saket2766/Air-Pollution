import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/" className="Logo">LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link>
              SEARCH <img src="/search_icon.svg" alt="search icon" />
            </Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link>ABOUT ME</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
