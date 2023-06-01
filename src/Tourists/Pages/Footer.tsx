import React from "react";
import { FooterContents, FooterSection } from "../StyledComponents/GlobalStyle";
import { Logo, Para, Wrapper } from "../StyledComponents/Styling";
import { NavLink } from "react-router-dom";

export const Footer = ()=>{
    return (
        <>
            <FooterSection>
                <Wrapper className="flex justify-between footer-section">

                    <FooterContents className="flex logo-section">
                        <Logo width="40%" src="assets/asset 1.png" alt="" />
                        <Para>Copyright @LOVE To Fly 2023 All Rights Reserved</Para>
                    </FooterContents>

                    <FooterContents className="flex">
                        <h5>Menu</h5>
                        <NavLink to="/" className="nav-links" >Home</NavLink>
                        <NavLink to="/" className="nav-links" >Destination</NavLink>
                        <NavLink to="/" className="nav-links" >Resevations</NavLink>
                        <NavLink to="/" className="nav-links" >Blogs</NavLink>
                        <NavLink to="/" className="nav-links" >About us</NavLink>
                        <NavLink to="/" className="nav-links" >Contact us</NavLink>
                    </FooterContents>

                    <FooterContents className="flex">
                        <h5>Information</h5>
                        <NavLink to="/" className="nav-links" >Home</NavLink>
                        <NavLink to="/" className="nav-links" >Destination</NavLink>
                        <NavLink to="/" className="nav-links" >Resevations</NavLink>
                        <NavLink to="/" className="nav-links" >Blogs</NavLink>
                    </FooterContents>

                    <FooterContents className="flex">
                        <h5>Contact Info</h5>
                        <p>+12362231232323</p>
                        <p>nadirbaig22@gmail.com</p>
                        <p>123, New Karachi, Pakistan</p>
                    </FooterContents>

                    <FooterContents className="flex">
                        <h5>Search</h5>
                        <input type="text" placeholder="search" />                        
                        <h6>Follow us on</h6>
                        <div className="footer-icons">
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                    </FooterContents>

                </Wrapper>
            </FooterSection>
        </>
    )
}