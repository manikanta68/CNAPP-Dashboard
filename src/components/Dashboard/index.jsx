import Header from "../Header"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdSync } from "react-icons/md";
import { BsThreeDotsVertical, BsClockFill,BsXLg } from "react-icons/bs";

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

import "./index.css"




const CnappDashboard = {
    cspmexicutiveDashboard: [
        {
            name: "cloudAccounts",
            description: [{name:"connected",
                         count: 2},
                         {
                            name: "nonConnected",
                            count: 2
                           }]
            
            
        },
        {
            name: "cloudAccountRiskMannagement",
            description: [
                {name: "failed",count: 1689},
                {name: "warning",count: 681},
                {name: "notAvailble",count: 36},
                {name: "passed", count: 7253}
            ]
    
        }
    ],
}

const colors = ["blue","red","green","yellow","pink","orange","lightgreen","skyblue","brown","gray","smoke"]


const Dashboard = () => {
    
    const [popup,setPopup] = useState(false)
    const [activeTab,setActiveTab] = useState("cspm")
   
    const onAddWidget = () => {
         setPopup(true)
    }

    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <div className="dashboard-navbar">
                    <p className="dashboard-heading">CNAPP DASHBOARD</p>
                    <div className="dashboard-navbar-options">
                        <button type="button" className="add-widget">Add Widget  <FaPlus /> </button>
                        <button type="button" className="sync-button"><MdSync /></button>
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
                <div className="main">
                    <div>
                        <p>CSPM Exicutive Dashboard</p>
                        <ul className="ul-cards-container">
                           {CnappDashboard.cspmexicutiveDashboard.map((each,index) => <li className="each-card" key={index}>
                            <p>{each.name} </p>
                            <ResponsiveContainer width="100%" height={150} >
                            <PieChart>
                                <Pie
                                    cx="50%"
                                    cy="50%"
                                    data={each.description}
                                    startAngle={0}
                                    endAngle={360}
                                    innerRadius="40%"
                                    outerRadius="70%"
                                    dataKey="count"
                                >
                                    {each.description.map((tem,index) => {
                                        const color = colors[Math.ceil(Math.random()*11)-1]
                                        console.log(Math.ceil(Math.random()*6)-1)
                                        return <Cell key={index} name={tem.name} fill={color}/>
                                    } )}
                                </Pie>
                                <Legend
                                    iconType= "square"
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                    iconSize={7} 
                                />
                            </PieChart>
                        </ResponsiveContainer>

                           </li>)}
                           <li className="last-card">
                           <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>    
                           </li>
                        </ul>
                        

                    </div>
                </div>
                {popup &&  <div className="popup-wraper">
                        <div className="popup-content">
                           <div className="sidebar-head-container"> <p>Add Widget</p> <button type="button" className="cross-button" onClick={() => setPopup(false)}><BsXLg color="white"/></button></div>
                           <p>Personalize your dashboard by adding the following widget</p>
                           <div className="tabs-container"> 
                              <button type="button" value="cspm" className="tab tab-bottom">cspm</button>
                              <button type="button" value="cwpp" className="tab">cwpp</button>
                              <button type="button" value="image" className="tab">Image</button>
                              <button type="button" value="tikect" className="tab">Ticket</button>
                           </div>
                           <div className="siderbar-footer"><button className="cancel" type="button">Cancel</button> <button className="confirm" type="button">Confirm</button></div>
                        </div>
                    </div>}
                
            </div>
        </div>
    )
}

export default Dashboard