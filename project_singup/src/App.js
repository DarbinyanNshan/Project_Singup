import { Dashboard } from "./Componets/Dashboard"
import { NavBar } from "./Componets/NavBar"
import "./App.css"
import { Products } from "./Componets/Products"
import { Route, Routes } from "react-router-dom"


function App() {
  return (

     <div className="App"> 
    <NavBar/>
       <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/pro" element={<Products/>} />
       </Routes>
      </div>
      
  )
}

export default App