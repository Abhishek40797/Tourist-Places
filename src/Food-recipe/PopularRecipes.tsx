import React, { useEffect, useState } from "react";
import { PopularRecipesCard } from "./PopularRecipesCard";
import { PopularRecipe } from "./TypescriptState-Props";

const FoodCategory = ()=>{

    const [popularrecipe,getPopularRecipes] = useState<PopularRecipe[]>([])

    useEffect(()=>{
        const fetchPopularRecipe = async ()=>{
            const res = await (await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=Indian&apiKey=564b38eceb9b406583bddc9a5cf03e60")).json()
            res.results ?  getPopularRecipes(res.results) : console.log(res.status)
        }
        fetchPopularRecipe()
    },[])

    return (
        <div style={{backgroundColor:"#FAF9F7"}}>
            <h3><u>Popular Recipes</u></h3>
            <PopularRecipesCard popularRecipes={popularrecipe}  />
        </div>        
    )
}
export default FoodCategory;