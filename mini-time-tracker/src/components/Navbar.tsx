import {Link} from "react-router-dom"
import "../css/Navbar.css"

export function Navbar() {
    return(
        <div className="navbar">
            <li>
                <Link to="/">Time Entries</Link>
            </li>
            <li>
                <Link to="add">Add Entries</Link>
            </li>
        </div>
    )
}