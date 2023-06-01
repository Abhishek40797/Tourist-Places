import React from "react";
import { PopularRecipe } from "./TypescriptState-Props";
import Slider from "react-slick";

interface INewRecipe {
    newRecipes : PopularRecipe[]
}

const NewRecipesCard = ({newRecipes}:INewRecipe)=>{

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true
    };
    
    return (
        <>
            <Slider {...settings} className="food-categories flex">
            {
                newRecipes.map((nMeal)=>{
                    const {id,title, image} = nMeal;
                    return (
                        <div className="new-recipe-card" key={id}>
                            <img src={image} alt="" />
                            <div className="recipe-name">
                                <h4>{title}</h4>
                            </div>
                        </div>
                    )
                })
            }
            </Slider>
        </>
    )
}
export default NewRecipesCard;