import React from "react";
import { PopularRecipe } from "../../Food-recipe/TypescriptState-Props";
import { FoodCard, H4, RecipeName } from "../Styled-components/StyleComponents";

interface ICategory {
    foodcategory : PopularRecipe[]
}

export const FoodCategoryCard = ({foodcategory}:ICategory)=>{
    return (
        <>
            {
                foodcategory.map((data)=>{
                    const {id,title,image} = data;
                    return (
                        <FoodCard width='18%' height='200px' key={id}>
                            <img src={image} alt='' />
                            <RecipeName>
                                <H4>{title}</H4>
                            </RecipeName>
                        </FoodCard>
                    )
                })
            }
        </>
    )
}