import { BigImages, BigTextSection, Button2, FeedbackCardsSection,SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"
import { BigTexts } from "../BigText"
import { FeedbackCards } from "../Cards.tsx/FeedbackCards"

export const ClientFeeback = ()=>{
    return (
        <>
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginBlock:"50px"}}>
                    <BigTextSection>

                        <BigTexts 
                            bigtext="What Clients Say About Us"
                            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                        />
                        
                    </BigTextSection>
                    <BigImages src="assets/asset 20.jpg" alt="" className="big-image" />
                </div>

                <FeedbackCardsSection className="flex">
                    <FeedbackCards image="assets/asset 23.avif" text="Samara Khan" />
                    <FeedbackCards image="assets/asset 21.png" text="Samara Khan" />
                    <FeedbackCards image="assets/asset 22.jpg" text="Samara Khan" />
                </FeedbackCardsSection>

                <SeeMoreSection>
                    <Button2>See More</Button2>
                </SeeMoreSection>
            </Wrapper>
        </>
    )
}