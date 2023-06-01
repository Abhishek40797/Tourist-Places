import React from 'react'
import { CardSection, FoodCard, H4, RecipeName } from '../Styled-components/StyleComponents'
import { PopularRecipe } from '../../Food-recipe/TypescriptState-Props';
import Slider from "react-slick";

interface IPopularRecipes {
    popularRecipes : PopularRecipe[]
}

export const PopularRecipesCard = ({popularRecipes}:IPopularRecipes)=>{

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index:number) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

    return (
        <>

            {/* <Slider {...settings} className='flex food-categories' >
                {
                    popularRecipes.map((recipe)=>{
                        const {id,title,image} = recipe
                        return (
                            <FoodCard width='18%' height='auto' key={id}>
                                <img src={image} alt='' />
                                <RecipeName>
                                    <H4>{title}</H4>
                                </RecipeName>
                            </FoodCard>
                        )
                    })
                }
            </Slider> */}
            
            <CardSection className='flex'>     
            {
                popularRecipes.map((recipe)=>{
                    const {id,title,image} = recipe
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
            </CardSection>
        </>
    )
}