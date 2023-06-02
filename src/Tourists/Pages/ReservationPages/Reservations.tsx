import { ReservationC } from "../../Components/ReservationsCard"
import { BigImages, BigTextSection, Cards, Wrapper } from "../../StyledComponents/Styling"
import { ReservationData } from "../../data/ReservationData"
import { BigTexts } from "../BigText"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Reservations = ()=>{
    return (
        <>
            <Header/>
            <Wrapper>
                <div className="flex justify-between flex-direction" style={{marginTop:"150px"}}>

                    <BigTextSection>
                        <BigTexts
                            bigtext="Best Every Resevations For Your"
                            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                        />
                    </BigTextSection>

                    <BigImages src="assets/asset 9.jpg" alt="" className="big-image" />
                </div>

                <Cards className="flex">
                   {
                        ReservationData.map((data,i)=>{
                            return (
                                <ReservationC data={data} key={i}  />
                            )
                        })
                   }             
                </Cards>
            </Wrapper>
            <Footer />
        </>
    )
}