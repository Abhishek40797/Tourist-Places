import { FoodCard, H4, RecipeName } from "../Styled-components/StyleComponents";
import { PopularRecipe } from "../../Food-recipe/TypescriptState-Props";

interface INewRecipe {
    newRecipes : PopularRecipe[]
}

export const NewRecipesCard = ({newRecipes}:INewRecipe)=>{
    return (
        <>
            {
                newRecipes.map((nRecipes)=>{
                    const {id,title,image} = nRecipes
                    return (
                        <FoodCard width="23%" height="400px" key={id}>
                            <img src={image} alt="" />
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