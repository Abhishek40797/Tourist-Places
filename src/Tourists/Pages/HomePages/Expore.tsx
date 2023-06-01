import React from "react";
import { BigImages, BigTextSection, H1, Para, Wrapper } from "../../StyledComponents/Styling";

export const Expore = ()=>{
    return (
        <>
            <Wrapper className="flex justify-between flex-direction">
                <BigTextSection>
                    <H1>Let's Expore Your Destination</H1>
                    <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
                </BigTextSection>
                <BigImages src="assets/asset 4.jpg" alt="" className="big-image" />
            </Wrapper>
        </>
    )
} 