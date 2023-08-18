import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const handleScrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" className="Logo">
          LOGO
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="#" onClick={handleScrollToAboutMe}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
