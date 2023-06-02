import React from "react";
import { Button, Card, CardBody, CardImage, H4, I } from "../StyledComponents/Styling";

interface IProps {
    data : {
        image : string,
        text1 : string,
        text2 : string
    }
}

export const ExporeC = ({data}:IProps)=>{
    const {image,text1,text2} = data;
    return (
        <>
            <Card>
                <CardImage src={image} alt="" />
                <CardBody>
                    <H4>{text1}</H4>
                    <h6><i className="fa-solid fa-location-dot"></i> {text2}</h6>
                    <div className="flex justify-between">
                        <h6><span>$300.00</span> per day</h6>
                        <p><I color="yellow" className="fa-solid fa-star"></I> (5.0) Reviews</p>
                    </div>
                    <Button bg="#00BFFF" text="#FFF">Book a Trip</Button>
                </CardBody>
            </Card>
        </>
    )
}