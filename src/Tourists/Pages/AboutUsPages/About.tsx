import { BgImages, Button2, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { AboutCardSection } from "./AboutCardSection"

export const About = ()=>{
    return (
        <>
            <Header />
            <Wrapper>
                <BgImages imagepath="assets/asset 34.avif">
                    <div className="text-on-image">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus impedit, beatae eius harum animi voluptatum omnis, ut cupiditate at consequatur placeat sapiente dicta. Labore.</p>
                    </div>
                    <SeeMoreSection className="image-btn">
                        <Button2>See More</Button2>
                    </SeeMoreSection>
                </BgImages>
                <AboutCardSection />
            </Wrapper>
            <Footer />
        </>
    )
}