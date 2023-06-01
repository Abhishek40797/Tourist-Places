import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import Home from "./Pages/TouristHome";
import { Destinations } from "./Pages/DestinationsPages/Destinations";
import { Reservations } from "./Pages/ReservationPages/Reservations";
import { Blogs } from "./Pages/BlogPages/Blog";
import { About } from "./Pages/AboutUsPages/About";
import { Contact } from "./Pages/ContactPages/Contacts";
import { Login } from "./Pages/LoginPage";
import { Signup } from "./Pages/SignUpPage";

export const Tourists = ()=>{
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Destinations" element={<Destinations/>} />
                    <Route path="/Reservations" element={<Reservations/>} />
                    <Route path="/Blogs" element={<Blogs/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Contact" element={<Contact/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/Signup" element={<Signup/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}