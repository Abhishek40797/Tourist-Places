import React from "react";
import { PopularRecipe } from "./TypescriptState-Props";

interface IFood {
    foodcategory : PopularRecipe[]
}

export const MealsByCategoryCard = ({foodcategory}:IFood)=>{
    
    return (
        <>
            {
                foodcategory.map((food)=>{
                    const {id,title,image} = food
                    return (
                        <div className="meals-recipe-card" key={id}>
                            <img src={image} alt="" />
                            <div className="recipe-name">
                                <h4>{title}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}