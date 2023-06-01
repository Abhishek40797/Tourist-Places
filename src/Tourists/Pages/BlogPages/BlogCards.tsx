import React from "react";
import { BlogHeading, Cards} from "../../StyledComponents/Styling";
import { BlogC } from "../../Components/BlogCard";

export const BlogCards = ()=> {
    return (
        <>
            <BlogHeading>
                <h2>Our Latest Blogs Posts</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni voluptates, natus minus, temporibus, incidunt cupiditate maxime eum facere ipsam atque sit amet consectetur adipisicing</p>
            </BlogHeading>
            <Cards className="flex">
                <BlogC />
            </Cards>
        </>
    )
}