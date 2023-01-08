import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"


export  const NavBar  = () => {

    return <>
      <ul className="menu">
         <div className="navlink"><NavLink to="/"  className="menu_title">Dashboard</NavLink><br/></div>
         <div className="navlink"><NavLink to="/pro"  className="menu_title">Products</NavLink></div>
      </ul>
  
    </>
    }


 







