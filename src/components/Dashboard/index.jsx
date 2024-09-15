import Header from "../Header"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {BsXLg } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import ExicutiveDashBoard from "../ExicutiveDashBoard";
import DashBoardNavbar from "../DashBoardNavBar"
import CwppDashboard from "../CWPPDashboard"
import RegistryScan from "../RegistryScan"
import "./index.css"




const CnappDashboard = [{
        id: uuidv4(),
        catogory: "cspm",
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
        id: uuidv4(),
        catogory: "cspm",
        name: "cloudAccountRiskMannagement",
        description: [
            { name: "Failed", count: 1689 },
            { name: "Warning", count: 681 },
            { name: "NotAvailble", count: 36 },
            { name: "Passed", count: 7253 }
        ]
        ,
        check: true

    },

    {
        id: uuidv4(),
        catogory: "cwpp",
        name: "Top 5 namespace specific alerts",
        description: [],
        check: true
    },
    {
        id: uuidv4(),
        catogory: "cwpp",
        name: "workload alerts",
        description: [],
        check: true
    },
    {
        id: uuidv4(),
        catogory: "image",
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
        id: uuidv4(),
        catogory: "image",
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
            }],
        check: true,
        report: {
            name: "Total Images",
            count: 2,
        }
    },
    {
        id: uuidv4(),
        name: "some",
        catogory: "tikcet",
        description: []
    }
]




const Dashboard = () => {
    const itemsLocal = JSON.parse(localStorage.getItem("Items"))
    const [userInput, setUserInput] = useState("")
    const [dataList, setDataList] = useState(itemsLocal !== null ? itemsLocal :  CnappDashboard)
    const [filterList, setFilterList] = useState([])
    const [popup, setPopup] = useState(false)
    const [activeTab, setActiveTab] = useState("cspm")
    const [widText, setWidText] = useState("")
    const [widName, setWidName] = useState("")

    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(dataList))
        const newList = dataList.filter((each) => each.name.toLowerCase().includes(userInput.toLowerCase()))
        setFilterList(newList)

    }, [userInput,dataList])

    const onAddWidget = () => {
        setPopup(true)
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const newWidget = {
            id : uuidv4(),
            catogory: activeTab,
            name: widName,
            description: [{
                name: widText,
                count: 4
            },
            {
                name: "success",
                count: 2
            }, {
                name: "time",
                count: 9
            }],
            check: true,
            report: {
                name: "Total vulnarbulities",
                count: 1665,
            }
        }
        setDataList((prev) => [...prev,newWidget])
        setFilterList((prev) => [...prev,newWidget])
        setWidName("")
        setWidText("")

    }


    return (
        <div>
            <Header userInputFunction={setUserInput} />
            <div className="dashboard-content">
                <DashBoardNavbar passData={setPopup} />
                <div className="main">
                    <div>
                        <p>CSPM Exicutive Dashboard</p>
                        <ul className="ul-cards-container">
                            {filterList.filter((each) => each.catogory === "cspm").map((each, index) =>
                                <ExicutiveDashBoard key={each.id} passData={setFilterList} each={each} filterList={filterList}/>
                            )}
                            <li className="last-card">
                                <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>
                            </li>
                        </ul>
                    </div>

                    <div className="cwpp-container">
                        <p>CWPP Dashboard</p>
                        <ul className="ul-cards-container">
                            {filterList.filter((each) => each.catogory === "cwpp").map((each) =>
                                <CwppDashboard key={each.id} passData={setFilterList} each={each} filterList={filterList} />
                            )}
                            <li className="last-card">
                                <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>
                            </li>
                        </ul>
                    </div>

                    <div className="registry-scan-container">
                        <p>Registry Scan</p>
                        <ul className="ul-cards-container">
                            {filterList.filter((each) => each.catogory === "image").map((each) =>
                                <RegistryScan key={each.id} passData={setFilterList} each={each}  filterList={filterList}/>
                            )}
                            <li className="last-card">
                                <button type="button" className="card-add-widget" onClick={onAddWidget}>  <FaPlus /> Add Widget  </button>
                            </li>
                        </ul>
                    </div>

                </div>

                {popup && <div className="popup-wraper">
                    <div className="popup-content">
                        <div>
                            <div className="sidebar-head-container"> <p>Add Widget</p> <button type="button" className="cross-button" onClick={() => setPopup(false)}><BsXLg color="white" /></button></div>
                            <p>Personalize your dashboard by adding the following widget</p>
                            <div className="tabs-container" onClick={(event) => setActiveTab(event.target.value)}>
                                <button type="button" value="cspm" className={`tab ${activeTab === "cspm" && "tab-bottom"}`}>cspm</button>
                                <button type="button" value="cwpp" className={`tab ${activeTab === "cwpp" && "tab-bottom"}`}>cwpp</button>
                                <button type="button" value="image" className={`tab ${activeTab === "image" && "tab-bottom"}`}>Image</button>
                                <button type="button" value="ticket" className={`tab ${activeTab === "ticket" && "tab-bottom"}`}>Ticket</button>
                            </div>
                            <ul className="active-tabs-container">

                                {dataList.filter((each) => each.catogory === activeTab).map((each, id) => <li key={id} className="active-tab-items"> <input value={each.check} checked={each.check} onChange={(event) => {
                                    console.log(event.target.value)
                                    const newList = dataList.map((item) => {
                                        if (item.id === each.id) {
                                            return { ...item, check: !item.check }
                                        }
                                        return item
                                    })
                                    setDataList(newList)
                                }} type="checkbox" /> <p>{each.name}</p></li>)}

                            </ul>
                            <form onSubmit={onSubmitData} className="add-data-container">
                                <h1>Add Widget Details</h1>
                                <div>
                                    <div className="each-input-container">
                                        <label htmlFor="widgetName">WidgetName: </label>
                                        <input id="widgetName" className="each-input" value={widName} type="text" onChange={(event) => setWidName(event.target.value)} />
                                    </div>
                                    <div className="each-input-container">
                                        <label htmlFor="widgetText">WidgetText: </label>
                                        <input id="widgetText" className="each-input" value={widText} type="text" onChange={(event) => setWidText(event.target.value)} />
                                    </div>
                                </div>
                                <button type="submit" className="add-button">Add</button>
                            </form>
                        </div>
                        <div className="siderbar-footer"><button className="cancel" type="button" onClick={() => setPopup(false)}>Cancel</button> <button className="confirm" type="button">Confirm</button></div>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Dashboard