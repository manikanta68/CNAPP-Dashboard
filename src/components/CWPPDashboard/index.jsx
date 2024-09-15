import { BsXLg, BsGraphUp } from "react-icons/bs";

import "./index.css"

const CwppDashboard = (props) => {
    const {passData,each,filterList} = props
    return (
        <li className="each-card">
            <div className="card-remove-container"> <p>{each.name} </p> <button type="button" className="card-remove-button" onClick={() => {
                const newList = filterList.filter((item) => item.id !== each.id)
                passData(newList)
            }}><BsXLg /></button></div>
            {each.description.length === 0 ? <div className="graph-data-container"> <BsGraphUp />  <p>No Graph data avaible!</p></div> : null}
        </li>
    )
}

export default CwppDashboard