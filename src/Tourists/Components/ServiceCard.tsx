import { H4, ServiceCard } from "../StyledComponents/Styling"
import { ServiceData } from "../data/ServiceData"

export const ServiceC = ()=>{
    return (
        <>
            {
                ServiceData.map((data)=>{
                    return (
                        <ServiceCard>
                            <i className={`${data.icon}`}></i>
                            <div className="service-text-section">
                                <H4>{data.text1}</H4>
                                <p>{data.text2}</p>
                            </div>
                        </ServiceCard>
                    )
                })
            }
        </>
    )
}