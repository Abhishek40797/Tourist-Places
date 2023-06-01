import React from "react";
import { Headers, Logo, Wrapper } from "../StyledComponents/Styling";
import { NavBar } from "../Components/Nav";

export const Header = ()=>{
    return (
        <>
            <Headers>
                <Wrapper className="flex" style={{justifyContent:"space-between"}}>
                    <Logo width="5%" src="assets/asset 1.png" alt="logo"/>
                    <NavBar/>
                </Wrapper>
            </Headers>
        </>
    )
}