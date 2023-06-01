import React, { useEffect, useState } from 'react'
import { CardSection, H3 } from '../Styled-components/StyleComponents'
import { useParams } from 'react-router-dom'
import { PopularRecipe } from '../../Food-recipe/TypescriptState-Props'
import { FoodCategoryCard } from '../Components/FoodCategoryCard'

export const FoodCategory = ()=>{
    const {type} = useParams()

    const [foodcategory,getFoodCategory] = useState<PopularRecipe[]>([]); 
    

    // useEffect(()=>{
    //     const fetchFood = async ()=>{
    //         const res =  await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${type}&apiKey=dd97e3c5fad94e2b97e9bba0da9e6ab0`)).json();
    //         res.results ?  getFoodCategory(res.results) : console.log(res.status)
    //     }
    //     fetchFood()
    // })

    return (
        <>
            <div className="container">
                <H3 style={{textAlign:"center"}}>{type}</H3>
                <CardSection className='flex'>
                    <FoodCategoryCard foodcategory={foodcategory}/>
                </CardSection>
            </div>
        </>
    )
}