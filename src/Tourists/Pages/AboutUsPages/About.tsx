import { AboutContent } from "../../Components/AboutSection"
import { BgImages, BigImages, Button2, SeeMoreSection, Wrapper } from "../../StyledComponents/Styling"
import { Footer } from "../Footer"
import { Header } from "../Header"

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
                
                <div className="flex justify-between about-section">
                    <BigImages src="assets/asset 35.png" alt="" className="about-image" />
                    <AboutContent text="Welcome to Smart Travel" listtype={true} />
                </div>
            
                <div className="flex justify-between about-section" style={{marginBlock:"50px"}}>
                    <AboutContent text="Our Story" listtype={false} />
                    <BigImages src="assets/asset 36.jpg" alt="" className="about-image" />
                </div>

                <div className="flex justify-between about-section" style={{marginBlock:"50px"}}>                
                    <BigImages src="assets/asset 37.webp" alt="" className="about-image" />
                    <AboutContent text="Our Mission" listtype={false} />
                </div>

                <SeeMoreSection>
                    <Button2>See More</Button2>
                </SeeMoreSection>

            </Wrapper>
            <Footer />
        </>
    )
}