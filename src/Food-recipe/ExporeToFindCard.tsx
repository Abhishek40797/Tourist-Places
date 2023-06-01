import React from "react";
import { NavLink } from 'react-router-dom'

export const ExporeFood = ()=>{
    return (
        <>
            <NavLink to={"/Pasta"} className="expore-food-card">
                <img src="https://thumbs.dreamstime.com/b/penne-pasta-plate-tomato-sauce-30685904.jpg" alt="" />
                <h4>Pasta</h4>
            </NavLink>

            <NavLink to={"/Noodles"} className="expore-food-card">
                <img src="https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg" alt="" />
                <h4>Noodle</h4>
            </NavLink>

            <NavLink to={"/Burger"} className="expore-food-card">
                <img src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg" alt="" />
                <h4>Burger</h4>
            </NavLink>

            <NavLink to={"/Pizza"} className="expore-food-card">
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" alt="" />
                <h4>Pizza</h4>
            </NavLink>

            <NavLink to={"/Spring roll"} className="expore-food-card">
                <img src="https://www.licious.in/blog/wp-content/uploads/2021/11/Vegetable-Rolls.jpg" alt="" />
                <h4>Spring roll</h4>
            </NavLink>

        </>
    )
}