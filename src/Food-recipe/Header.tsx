import React from "react";
import logo from "./assets/asset 0.png"

const Header = ()=>{
    return (
        <>
            <header>
                <div className="container flex">
                    <img src={logo} alt="" />
                </div>
            </header>
        </>
    )
}
export default Header;