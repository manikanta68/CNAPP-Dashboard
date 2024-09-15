import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Label } from "recharts"
import { BsXLg } from "react-icons/bs";
import "./index.css"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#DFFF00", "#FFBF00", "#6495ED"];

const ExicutiveDashBoard = ({each,passData,filterList}) => {
    return (
        <li className="each-card">
            <div className="card-remove-container">
                <p>{each.name} </p>
                <button type="button" className="card-remove-button" onClick={() => {
                    const newList = filterList.filter((item) => item.id !== each.id)
                    passData(newList)
                }}><BsXLg /></button>
            </div>
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

        </li>
    )
}



export default ExicutiveDashBoard