import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <header>
            <li>
                <Link>Search</Link>
            </li>
            <li>
                <Link>Projects</Link>
            </li>
            <li>
                <Link>About Me</Link>
            </li>
        </header>
     );
}
 
export default Navbar;