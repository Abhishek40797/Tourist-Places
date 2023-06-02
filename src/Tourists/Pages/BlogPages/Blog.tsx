import React from "react";
import { BgImages, BlogHeading, Button2, Cards, H2, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { BlogC } from "../../Components/BlogCard";
import { BlogData } from "../../data/BlogData";

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

                <BlogHeading>
                    <h2>Our Latest Blogs Posts</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni voluptates, natus minus, temporibus, incidunt cupiditate maxime eum facere ipsam atque sit amet consectetur adipisicing</p>
                </BlogHeading>
                
                <Cards className="flex">
                    {
                        BlogData.map((data,i)=>{
                            return (
                                <BlogC data={data}  key={i} />
                            )
                        })
                    }
                </Cards>

            </Wrapper>
            <Footer/>
        </>
    )
}