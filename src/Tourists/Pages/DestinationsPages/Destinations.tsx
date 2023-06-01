import { BigImages, BigTextSection, H1, Para, Wrapper } from "../../StyledComponents/Styling"
import { ExporeCards } from "../Cards.tsx/ExporeCards"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Destinations = ()=>{
    return (
        <>
            <Header />
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginTop:"150px"}}>
                    <BigTextSection>
                        <H1>Let's Expore Your Destination</H1>
                        <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?</Para>
                    </BigTextSection>
                    <BigImages src="assets/asset 4.jpg" alt="" className="big-image" />
                </div>
                <ExporeCards />
            </Wrapper>
            <Footer />
        </>
    )
}