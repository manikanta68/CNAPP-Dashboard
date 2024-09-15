import {  BsXLg, BsGraphUp } from "react-icons/bs";

import "./index.css"

const RegistryScan = (props) => {
    const {passData,each,filterList} = props
    return (
        <li className="each-card">
            <div className="card-remove-container"><p>{each.name} </p> <button type="button" onClick={() => {
                const newList = filterList.filter((item) => item.id !== each.id)
                passData(newList)
            }} className="card-remove-button"><BsXLg /></button></div>
            <p className="report-name">{each.report.count} { }{each.report.name}</p>
            {each.description.length === 0 ? <div className="graph-data-container"> <BsGraphUp />  <p>No Graph data avaible!</p></div> :
                <ul className="progres-bar">
                    {each.description.map((each, id) => <li key={id} className="progress-item">.</li>)}
                </ul>
            }
            <ul className="progress-list-item-shape-container">
                {each.description.map((each, id) => <li key={id} className="progress-list-item-shape-item"> <div className="box-shape"></div> <p className="progress-list-item-shape-item-text">{each.name}{" "}({each.count}) </p></li>)}
            </ul>
        </li>
    )
}

export default RegistryScan 