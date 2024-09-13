import { Link } from "react-router-dom"

import "./index.css"

const Header = () => {
    return (
        <nav className="nav-container">
            <div className="nav-items-container">
            <Link className="nav-link" to="/">Home</Link>
            <input type="text" placeholder="Search anything..." className="search-bar"/>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </div>
            
        </nav>
    )
}

export default Header