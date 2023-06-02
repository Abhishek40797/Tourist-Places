import React from "react";
import { Button } from "../../StyledComponents/Styling";

interface IProps {
    image : string,
    text : string
}

export const FeedbackCards = ({image,text}:IProps)=>{
    return (
        <>
            <div className="feedback-card flex">
                <div className="feedback-top-section flex">
                    <div className="left-top-section flex">
                        <img src={image} alt="" />
                        <div className="feedback-text">
                            <h6>{text}</h6>
                            <p><i className="fa-solid fa-star"></i> (5.0) Reviews</p>  
                        </div>
                    </div>
                    <p>10/2/2023</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima suscipit quo commodi eligendi aliquam perferendis, labore voluptates corrupti laboriosam ad laborum, quia dicta veritatis delectus? Sunt fugit sapiente sed in voluptates ex, ad explicabo, temporibus magnam dolores labore eum sint unde maiores officiis facere amet laborum totam perferendis?</p>
                <div>
                    <Button bg="#00BFFF" text="#FFF">See More</Button>
                </div>
            </div>
        </>
    )
}