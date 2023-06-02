import { H4, ServiceCard } from "../StyledComponents/Styling"

interface IProps {
    data : {
        icon : string,
        text1 : string,
        text2 : string
    }
}

export const ServiceC = ({data}:IProps)=>{
    return (
        <>
            <ServiceCard>
                <i className={`${data.icon}`}></i>
                <div className="service-text-section">
                    <H4>{data.text1}</H4>
                    <p>{data.text2}</p>
                </div>
            </ServiceCard>
        </>
    )
}