import React,{ useState,useEffect } from 'react'
import { H3 } from '../Styled-components/StyleComponents'
import { PopularRecipesCard } from '../Components/PopularRecipesCard'
import { PopularRecipe } from '../../Food-recipe/TypescriptState-Props'

export const PopularRecipes = ()=>{

    const [popularrecipe,getPopularRecipes] = useState<PopularRecipe[]>([])

    useEffect(()=>{
        const fetchPopularRecipe = async ()=>{
            const res = await (await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=Indian&apiKey=dd97e3c5fad94e2b97e9bba0da9e6ab0")).json()
            res.results ?  getPopularRecipes(res.results) : console.log(res.status)
        }
        fetchPopularRecipe()
    },[])
    
    return (
        <>
            <div className="container">
                <H3>Popular Recipes</H3>               
                <PopularRecipesCard popularRecipes={popularrecipe} />
            </div>
        </>
    )
}