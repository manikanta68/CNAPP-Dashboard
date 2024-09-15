import { Link } from "react-router-dom"
import { useState } from "react"
import "./index.css"


const Header = (props) => {
    const [input,setInput] = useState("")

    const {userInputFunction} = props
    
    return (
        <nav className="nav-container">
            <div className="nav-items-container">
            <Link className="nav-link" to="/">Home</Link>
            <input value={input} onChange={(event) => {
                userInputFunction(event.target.value)
                setInput(event.target.value)
            } } type="text" placeholder="Search anything..." className="search-bar"/>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </div>
            
        </nav>
    )
}

export default Header