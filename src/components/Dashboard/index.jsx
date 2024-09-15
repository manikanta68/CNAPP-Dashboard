import Header from "../Header"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdSync } from "react-icons/md";
import { BsThreeDotsVertical, BsClockFill, BsXLg, BsGraphUp } from "react-icons/bs";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Label } from "recharts"



import "./index.css"




const CnappDashboard = {
    cspm: [
        {
            name: "cloudAccounts",
            description: [{
                name: "Connected",
                count: 2
            },
            {
                name: "NonConnected",
                count: 2
            }],
            check: true


        },
        {
            name: "cloudAccountRiskMannagement",
            description: [
                { name: "Failed", count: 1689 },
                { name: "Warning", count: 681 },
                { name: "NotAvailble", count: 36 },
                { name: "Passed", count: 7253 }
            ]
            ,
            check: true

        }
    ],
    cwpp: [
        {
            name: "Top 5 namespace specific alerts",
            description: [],
            check: true
        },
        {
            name: "workload alerts",
            description: [],
            check: true
        }
    ],
    image: [
        {
            name: "Image Risk Assessment",
            description: [{
                name: "Critical",
                count: 9
            },
            {
                name: "High",
                count: 150
            },
            {
                name: "Low",
                count: 20
            },
            {
                name: "Medim",
                count: 2
            }],
            check: true,
            report: {
                name: "Total vulnarbulities",
                count: 1665,
            }
        },
        {
            name: "Image Security Issues",
            description: [
                {
                    name: "Critical",
                    count: 2
                },
                {
                    name: "High",
                    count: 2
                },
                {
                    name: "Low",
                    count: 2
                },
                {
                    name: "Medim",
                    count: 2
                }            ],
            check: true,
            report: {
                name: "Total Images",
                count: 2,
            }
        }
    ]

}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#DFFF00", "#FFBF00", "#6495ED"];


const Dashboard = () => {

    const [popup, setPopup] = useState(false)
    const [activeTab, setActiveTab] = useState("cspm")
    const [checkbox, setCheckbox] = useState(true)

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
                        <button type="button" className="add-widget" onClick={() => setPopup(true)}>Add Widget  <FaPlus /> </button>
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
                            {CnappDashboard.cspm.map((each, index) => <li className="each-card" key={index}>
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
                                            {each.description.map((tem, index) => {
                                                return <Cell key={`cell-${index}`} name={`${tem.name} ${"  "} (${tem.count})`} fill={COLORS[index % COLORS.length]} />
                                            })}
                                        </Pie>
                                        <Label
                                            width={30}
                                            position="center"
                                            content="hi"
                                        ></Label>
                                        <Legend
                                            iconType="square"
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
                    <div className="cwpp-container">
                        <p>CWPP Dashboard</p>
                        <ul className="ul-cards-container">
                            {CnappDashboard.cwpp.map((each, index) => <li className="each-card" key={index}>
                                <p>{each.name} </p>
                                {each.description.length === 0 ? <div className="graph-data-container"> <BsGraphUp />  <p>No Graph data avaible!</p></div> : null}
                            </li>)}
                            <li className="last-card">
                                <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>
                            </li>
                        </ul>


                    </div>
                    <div className="registry-scan-container">
                        <p>Registry Scan</p>
                        <ul className="ul-cards-container">
                            {CnappDashboard.image.map((each, index) => <li className="each-card" key={index}>
                                <p>{each.name} </p>
                                <p className="report-name">{each.report.count} { }{each.report.name}</p>
                                {each.description.length === 0 ? <div className="graph-data-container"> <BsGraphUp />  <p>No Graph data avaible!</p></div> : 
                                 <ul className="progres-bar">
                                    {each.description.map((each) => <li className="progress-item">.</li>)}
                                 </ul>
                                }
                                <ul className="progress-list-item-shape-container">
                                    {each.description.map((each) => <li className="progress-list-item-shape-item"> <div className="box-shape"></div> <p className="progress-list-item-shape-item-text">{each.name}{" "}({each.count}) </p></li>)}
                                </ul>
                            </li>)}
                            <li className="last-card">
                                <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>
                            </li>
                        </ul>


                    </div>
                </div>
                {popup && <div className="popup-wraper">
                    <div className="popup-content">
                        <div className="sidebar-head-container"> <p>Add Widget</p> <button type="button" className="cross-button" onClick={() => setPopup(false)}><BsXLg color="white" /></button></div>
                        <p>Personalize your dashboard by adding the following widget</p>
                        <div className="tabs-container" onClick={(event) => console.log(event.target.value)}>
                            <button type="button" value="cspm" className="tab">cspm</button>
                            <button type="button" value="cwpp" className="tab">cwpp</button>
                            <button type="button" value="image" className="tab">Image</button>
                            <button type="button" value="tikect" className="tab">Ticket</button>
                        </div>
                        <ul className="active-tabs-container">
                            {CnappDashboard[activeTab].map((each, id) => <li key={id} className="active-tab-items"> <input value={each.check} type="checkbox" /> <p>{each.name}</p></li>)}
                        </ul>
                        <div className="siderbar-footer"><button className="cancel" type="button">Cancel</button> <button className="confirm" type="button">Confirm</button></div>
                    </div>
                </div>}
            </div>
            
        </div>
    )
}

export default Dashboard