import React from "react";
import Header from "./Header";
import { Hero } from "./Hero";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MealsCategory from "./MealsByCategory";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const FoodRecipe = ()=>{
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hero/>} />
                    <Route path="/:food" element={<MealsCategory/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}