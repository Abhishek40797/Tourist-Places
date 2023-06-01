import React, { useEffect, useState } from "react";
import NewRecipesCard from "./NewRecipesCard";
import { PopularRecipe } from "./TypescriptState-Props";

export const NewRecipes = ()=>{
    const [newRecipes,getNewRecipes] = useState<PopularRecipe[]>([]);

    useEffect(()=>{
        const fetchNewRecipes  = async ()=>{
            const res = await (await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast%20dish&apiKey=564b38eceb9b406583bddc9a5cf03e60")).json();
            res.results ?  getNewRecipes(res.results) : console.log(res.status)
        }
        fetchNewRecipes();
    },[])

    return (
        <>
            <h3><u>New Recipes</u></h3>
            <NewRecipesCard newRecipes={newRecipes} />
        </>
    )
}