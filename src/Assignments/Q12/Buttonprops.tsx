import React from "react";
import Button from "./Buttons";

interface ButtonState {
    text : string,
    background : string
}

const ButtonProps = ()=> {
    const buttonProps:ButtonState[] = [
        {
            text : "Normal Button",
            background : "#FFC0CB"
        },
        {
            text : "Tomato Button",
            background : "#FF6347"
        }
    ]
    return (
        <>
            {
                buttonProps.map((buttprops)=>{
                    return <Button content={buttprops.text} color={buttprops.background} />
                })
            }
        </>
    )
}
export default ButtonProps;