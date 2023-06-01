import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { PopularRecipe } from "./TypescriptState-Props";
import { MealsByCategoryCard } from "./MealsByCategoryCard";

const MealsCategory = ()=>{
    const { food } = useParams()

    const [foodcategory,getFoodCategory] = useState<PopularRecipe[]>([]); 
    

    const fetchFood = async ()=>{
        const res =  await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${food}&apiKey=564b38eceb9b406583bddc9a5cf03e60`)).json();
        res.results ?  getFoodCategory(res.results) : console.log(res.status)
    }

    useEffect(()=>{
        fetchFood()
    })

    return (
        <>
            <h3 style={{marginBlock:"50px",textAlign:"center"}}>{food}</h3>
            <div className="food-categories container flex" style={{width:"1280px",margin:"auto"}}>
                <MealsByCategoryCard foodcategory={foodcategory} />
            </div>
        </>
    )
}
export default MealsCategory;