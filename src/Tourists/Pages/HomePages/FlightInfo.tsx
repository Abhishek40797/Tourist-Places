import { FlightInfoCards } from "../../Components/FlightInfoCard";
import { FlightInformation, Wrapper } from "../../StyledComponents/Styling";
import { FlightInform } from "../../data/FlighInfo";

const FlightInfo = ()=>{
    return (
        <>
            <Wrapper>
                <FlightInformation className="flex">
                    {
                        FlightInform.map((info)=>{
                            return (
                                <FlightInfoCards info={info} />
                            )
                        })
                    }
                </FlightInformation>
            </Wrapper>
        </>
    )
}
export default FlightInfo;