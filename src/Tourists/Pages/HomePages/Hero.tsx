import React from "react";
import { BigTextSection, Button, H1, BigImages, Para, Wrapper } from "../../StyledComponents/Styling";


export const Hero = ()=>{
    return (
        <>
            <Wrapper className="flex flex-direction">
                <BigTextSection>
                    <H1>Let Starts Your <br/> Beautiful<br/> Journey With Us</H1>
                    <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
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