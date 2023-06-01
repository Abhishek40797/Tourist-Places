import { ServiceC } from "../Components/ServiceCard"
import { H3, Wrapper, ServicesCards } from "../StyledComponents/Styling"

export const Services = ()=>{
    return (
        <>
           <Wrapper style={{marginBlock:"50px"}}>
                <H3>Our Services</H3>
                <ServicesCards className="flex">
                    <ServiceC />
                </ServicesCards>
           </Wrapper>
        </>
    )
}