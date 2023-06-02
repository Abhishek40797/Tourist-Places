import { ExporeC } from "../../Components/ExporeCard"
import { BigImages, BigTextSection, Cards, Wrapper } from "../../StyledComponents/Styling"
import { ExporeData } from "../../data/Expore"
import { BigTexts } from "../BigText"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Destinations = ()=>{
    return (
        <>
            <Header />
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginTop:"150px"}}>
                    <BigTextSection>

                        <BigTexts
                            bigtext="Let's Expore Your Destination"
                            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                        />
                        
                    </BigTextSection>
                    <BigImages src="assets/asset 4.jpg" alt="" className="big-image" />
                </div>
                
                <Cards className="flex">
                    {
                        ExporeData.map((data,i)=>{
                            return (
                                <ExporeC data={data} key={i}/>
                            )
                        })
                    }                
                </Cards>

            </Wrapper>
            <Footer />
        </>
    )
}