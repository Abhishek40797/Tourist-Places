import React from "react";
import { LogoHeading, UserHeadingSection } from "../StyledComponents/Styling";

interface IProps {
    image :string,
    text : string,
    heading : string,
    subheading : string,
    align : string
}

export const LogoHeadingSection = ({image,text,heading,subheading,align}:IProps)=>{
    return (
        <>
            <LogoHeading className="flex">
                <img src={image} alt="" />
                <h6>{text}</h6>
            </LogoHeading>

            <UserHeadingSection align={align}>
                <h1>{heading}</h1>
                <p>{subheading}</p>
            </UserHeadingSection>
        </>
    )
}