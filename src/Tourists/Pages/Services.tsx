import { ServiceC } from "../Components/ServiceCard"
import { H3, Wrapper, ServicesCards } from "../StyledComponents/Styling"
import { ServiceData } from "../data/ServiceData"

export const Services = ()=>{
    return (
        <>
           <Wrapper style={{marginBlock:"50px"}}>
                <H3>Our Services</H3>
                <ServicesCards className="flex">
                    {
                        ServiceData.map((data,i)=>{
                            return (
                                <ServiceC data={data} key={i} />
                            )
                        })
                    }
                </ServicesCards>
           </Wrapper>
        </>
    )
}