import React from "react";
import NavBar from "./NavBar";
import './Header.css'
import HorizonLine from "./HorizonLine";

const Header =() =>{
    return <div className="header">
        <NavBar/>
        <HorizonLine/>
    </div>
}

export default Header