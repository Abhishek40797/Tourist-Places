import { BigImages, BigTextSection, Button2, H1, H4, Para, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"

export const About = ()=>{
    return (
        <>
            <Wrapper>
                <div  className="flex justify-between flex-direction">
                    <BigTextSection>
                        <H1>About Us</H1>
                        <H4>Our Story</H4>
                        <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
                    </BigTextSection>
                    <BigImages src="assets/asset 19.jpg" alt="" className="big-image" />
                </div>
                <SeeMoreSection>
                    <Button2>See More</Button2>
                </SeeMoreSection>
            </Wrapper>
        </>
    )
}