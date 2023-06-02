import React from "react";
import { BigImages, BigTextSection, Button, Wrapper } from "../../StyledComponents/Styling";
import { BigTexts } from "../BigText";


export const Hero = ()=>{
    return (
        <>
            <Wrapper className="flex flex-direction">
                <BigTextSection>
                    <BigTexts 
                        bigtext="Let Starts Your Beautiful Journey With Us" 
                        para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                    />

                    <div className="flex hero-buttons">
                    <Button bg="#00BFFF" text="#FFF"><i className="fa-sharp fa-solid fa-plane"></i> Plane a Trip</Button>&nbsp;&nbsp;&nbsp;
                    <Button bg="transparent" text="#000"><i className="fa-solid fa-magnifying-glass"></i> Plane a Trip</Button>

                </div>
                </BigTextSection>
                
                <BigImages src="assets/asset 2.png" alt="" />
            </Wrapper>
        </>
    )
}