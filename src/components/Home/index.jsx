import { Link } from "react-router-dom"
import Header from "../Header"
import "./index.css"

const Home = () => {
    return (
        <div>
               <Header/>
                <div className="home-content-container">
                  <Link to="/dashboard" className="nav-link"> <p className="home-link">Go To Dashboard</p> </Link>
                </div>
        </div>
        
    )
}

export default Home