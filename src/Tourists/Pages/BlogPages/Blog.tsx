import React from "react";
import { BgImages, Button2, H2, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling";
import { BlogCards } from "./BlogCards";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Blogs = ()=>{
    return (
        <>
            <Header />
            <Wrapper>
                <BgImages imagepath="assets/asset 29.jpg">
                    <H2>20 Most Beautiful Travel Blogs in 2023</H2>
                    <SeeMoreSection className="image-btn">
                        <Button2>See More</Button2>
                    </SeeMoreSection>
                </BgImages>
                
                <BlogCards />
            </Wrapper>
            <Footer/>
        </>
    )
}