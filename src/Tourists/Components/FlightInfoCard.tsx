import { FlightInfoCard, FlightInfoTopSection, H4 } from "../StyledComponents/Styling"
import { FlightInfo } from "../data/FlighInfo"

export const FlightInfoCards = ()=>{
    return (
        <>
            {
                FlightInfo.map((info)=>{
                    const {icon,text1,text2} = info;
                    return (
                        <FlightInfoCard key={new Date().getTime()}>
                            <FlightInfoTopSection className="flex" >
                                <H4><i className={`${icon}`}></i> {text1}</H4>
                                <i className="fa-sharp fa-solid fa-angle-left fa-rotate-270 fs-5"></i>
                            </FlightInfoTopSection>
                            <h3>{text2}</h3>
                        </FlightInfoCard>
                    )
                })
            }
        </>
    )
}