import { BigImages, BigTextSection, Button2, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"
import { BigTexts } from "../BigText"

export const About = ()=>{
    return (
        <>
            <Wrapper>
                <div  className="flex justify-between flex-direction">
                    <BigTextSection>
                        <BigTexts
                            bigtext="About Us"
                            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                        />
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