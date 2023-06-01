import { NavLink } from "react-router-dom"
import { BlogCard, CardImage, H4 } from "../StyledComponents/Styling"
import { BlogData } from "../data/BlogData"

export const BlogC = ()=>{
    return (
        <>
            {
                BlogData.map((data,i)=>{
                    return (
                        <BlogCard key={i}>
                            <CardImage src={data.src} alt="" />
                            <div className="date-author">
                                <H4>23/4/2023</H4>
                                <h6>Author</h6>
                            </div>
                            <h4>Give you better health a lift in our journey..........</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae temporibus rerum tenetur suscipit magni unde ratione sit amet consectetur adipisicing elit sit amet consectetur nam......<NavLink to="#" className="link">See More</NavLink></p>
                        </BlogCard>
                    )
                })
            }
        </>
    )
}