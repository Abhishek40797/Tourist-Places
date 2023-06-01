import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../StyledComponents/Styling";

export const NavBar = ()=>{
    const navigate = useNavigate()

    const [menuicon,setMenuIcon] = useState("fa-solid fa-bars");
    const [active,setActive] = useState(false)
    
    const handleResponsive = (e:any)=>{
        setActive(!active)
        !active ? setMenuIcon("fa-solid fa-xmark") : setMenuIcon("fa-solid fa-bars")
    }

    return (
        <>
            <nav className={ `flex nav-links ${active ? "open" : ""} `}>
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/Destinations" className="nav-item">Destination</NavLink>
                <NavLink to="/Reservations" className="nav-item">Reservations</NavLink>
                <NavLink to="/Blogs" className="nav-item">Blogs</NavLink>
                <NavLink to="/About" className="nav-item">About us</NavLink>
                <NavLink to="/Contact" className="nav-item">Contact us</NavLink>
            </nav>
            <div className="flex menu-btns">
                <Button bg="transparent" text="#00BFFF" onClick={()=> navigate("/login")} >Login</Button>
                <Button bg="#00BFFF" text="#FFF" onClick={()=> navigate("/Signup")}>Sign up</Button>
                <i className={`${menuicon}`} id="menu-icon"  onClick={(e)=>handleResponsive(e)}></i>
            </div>
        </>
    )
}