import { MdSync } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical, BsClockFill} from "react-icons/bs";
import "./index.css"

const DashBoardNavbar = ({handler,onAddWidget}) => {
    
    return (
        <div className="dashboard-navbar">
                    <p className="dashboard-heading">CNAPP DASHBOARD</p>
                    <div className="dashboard-navbar-options">
                        <button type="button" className="add-widget" onClick={() => onAddWidget(true)}>Add Widget  <FaPlus /> </button>
                        <button type="button" className="sync-button" onClick={() =>{
                            handler()
                        
                        } }><MdSync /></button>
                        <button type="button" className="threedots-button"><BsThreeDotsVertical /></button>
                        <div className="clock-container">
                            <div className="clock-border">
                                <BsClockFill color="darkblue" />
                            </div>
                            <select className="days-select">
                                <option>Last 2 days</option>
                            </select>
                        </div>
                    </div>
                </div>
    )
}


export default DashBoardNavbar