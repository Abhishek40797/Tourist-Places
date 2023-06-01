import { AboutTextSection, BigImages, Button2, SeeMoreSection } from "../../StyledComponents/Styling"

export const AboutCardSection = ()=>{
    return (
        <>
            <div className="flex justify-between about-section">
                <BigImages src="assets/asset 35.png" alt="" className="about-image" />
                <AboutTextSection>
                    <h1>Welcome to Smart Travel</h1>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                    <div className="text-contents flex justify-between">
                        <i className="fa-solid fa-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                    </div>
                </AboutTextSection>
            </div>
            <div className="flex justify-between about-section" style={{marginBlock:"50px"}}>
                <AboutTextSection>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                </AboutTextSection>
                <BigImages src="assets/asset 36.jpg" alt="" className="about-image" />
            </div>
            <div className="flex justify-between about-section" style={{marginBlock:"50px"}}>                
                <BigImages src="assets/asset 37.webp" alt="" className="about-image" />
                <AboutTextSection>
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                </AboutTextSection>
            </div>
            <SeeMoreSection>
                <Button2>See More</Button2>
            </SeeMoreSection>
        </>
    )
}