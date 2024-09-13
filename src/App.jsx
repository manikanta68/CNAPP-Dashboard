import {Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
  
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashbor" element={<Dashboard/>}/>
       </Routes>
  )
}

export default App


