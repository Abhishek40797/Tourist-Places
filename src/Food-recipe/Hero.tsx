import React, { useState } from "react";
import FoodCategory from "./PopularRecipes";
import { NewRecipes } from "./NewRecipes";
// import { DalRecipe } from "./DalRecipe";
import { ExportToFInd } from "./ExporeToFindFood";
import { useNavigate } from "react-router-dom";
// import { LatestMeals } from "./LatestMeals/LatestMeals";

export const Hero = ()=>{
    const navigate = useNavigate()
    const [serachMeals,getSearchMeals] = useState<string>("") 

    const handleSearchMeals = ()=>{
        navigate(`/${serachMeals}`)
    }

    return (
        <>
            <div className="container">
                <div className="search-inbox">
                    <input type="text" value={serachMeals} placeholder="Search pizza,burger,noodle,pasta here" onChange={(e)=>getSearchMeals(e.target.value)}  />
                    <i className="bi bi-search" onClick={handleSearchMeals}></i>
                </div>
                <FoodCategory />
                <NewRecipes />
                <ExportToFInd />
            </div>
        </>
    )
}