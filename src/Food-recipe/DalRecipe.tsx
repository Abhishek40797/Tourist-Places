import React from "react";
import { DalRecipeCard } from "./DalRecipeCard";

export const DalRecipe = ()=>{
    return (
        <div style={{backgroundColor:"#FAF9F7",padding:"10px"}}>
            <h3><u>Dal Recipes</u></h3>
            <div className="food-categories flex">
                <DalRecipeCard />
            </div>
        </div>
    )
}