import React from "react";
import { CardSection, CircleCard, H3, H4 } from "../Styled-components/StyleComponents";
import { useNavigate } from "react-router-dom";

const exporeData = [
    {
        id : 1,
        image : "https://thumbs.dreamstime.com/b/penne-pasta-plate-tomato-sauce-30685904.jpg",
        title : "Pasta"
    },
    {
        id : 2,
        image : "https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg",
        title : "Noodle"
    },
    {
        id : 3,
        image : "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg",
        title : "Burger"
    },
    {
        id : 4,
        image : "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
        title : "Pizza"
    },
    {
        id : 5,
        image : "https://www.licious.in/blog/wp-content/uploads/2021/11/Vegetable-Rolls.jpg",
        title : "Spring roll"
    },
]

export const ExporeCard = ()=>{
    const navigate = useNavigate()
    return (
        <>
            <H3>Expore to Find</H3>
            <CardSection className="flex ">
                {
                    exporeData.map(data=>{
                        const {id,title,image} = data
                        return (
                            <CircleCard key={id} onClick={()=>navigate(`${title}`)}>
                                <img src={image} alt="" />
                                <H4>{title}</H4>
                            </CircleCard>
                        )
                    })
                }
                
            </CardSection>
        </>
    )
}