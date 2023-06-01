import React from "react"
import { Hero } from "./Pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Styled-components/GlobalStyle";
import { FoodCategory } from "./Pages/CategoryFood";

const FoodRecipeWithStyled = ()=>{
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/:type" element={<FoodCategory/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default FoodRecipeWithStyled;