import {Link} from "react-router-dom"
import "../styles/navbar.css"
const Navbar = () => {
    return ( 
        <header>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul>
                <li>
                    <Link>Search</Link>
                </li>
                <li>
                    <Link>Projects</Link>
                </li>
                <li>
                    <Link>About Me</Link>
                </li>
            </ul>
        </header>
     );
}
 
export default Navbar;