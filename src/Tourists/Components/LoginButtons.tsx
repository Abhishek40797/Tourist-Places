import React from "react";
import { Button } from "../StyledComponents/Styling";

interface IProps {
    icon : string,
    label : string
}

export const LoginButton = ({icon,label}:IProps)=>{
    return (
        <>
            <Button 
                className="buttons" 
                bg="transparent" 
                text="#000">
                <i className={`${icon}`}></i> {label}
            </Button> 
        </>
    )
}