import { BigImages, BigTextSection, Button2, H1, Para, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"
import { FeedbackCards } from "../Cards.tsx/FeedbackCards"

export const ClientFeeback = ()=>{
    return (
        <>
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginBlock:"50px"}}>
                    <BigTextSection>
                        <H1>What Clients Say <br></br> About Us</H1>
                        <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
                    </BigTextSection>
                    <BigImages src="assets/asset 20.jpg" alt="" className="big-image" />
                </div>
                <FeedbackCards />
                <SeeMoreSection>
                    <Button2>See More</Button2>
                </SeeMoreSection>
            </Wrapper>
        </>
    )
}