import React from "react";
import { PopularRecipe } from "./TypescriptState-Props";
import Slider from "react-slick";

interface ICard {
    popularRecipes : PopularRecipe[]
}


export const PopularRecipesCard = ({popularRecipes}:ICard)=>{

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true
      };

    return (
        <>
            
            <Slider {...settings} className="food-categories flex">
            {
                popularRecipes.map((recipe)=>{
                    const {id,title,image} = recipe
                    return (
                        <div className="popular-recipe-card" key={id}>
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