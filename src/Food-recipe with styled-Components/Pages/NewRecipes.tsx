import React , { useEffect, useState } from "react";
import { CardSection, H3 } from "../Styled-components/StyleComponents";
import { NewRecipesCard } from "../Components/NewRecipesCard";
import { PopularRecipe } from "../../Food-recipe/TypescriptState-Props";
import { ExporeCard } from "../Components/ExporeToFindCard";

export const NewRecipes = ()=>{

    const [newRecipes,getNewRecipes] = useState<PopularRecipe[]>([]);

    useEffect(()=>{
        const fetchNewRecipes  = async ()=>{
            const res = await (await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast%20dish&apiKey=dd97e3c5fad94e2b97e9bba0da9e6ab0")).json();
            res.results ?  getNewRecipes(res.results) : console.log(res.status)
        }
        fetchNewRecipes();
    },[])

    return (
        <>
            <div className="container">
                <H3>New Recipes</H3>
                <CardSection className='flex'>                    
                    <NewRecipesCard newRecipes={newRecipes} />
                </CardSection>
                <ExporeCard />
            </div>
        </>
    )
}