import { FlightInfoCards } from "../../Components/FlightInfoCard";
import { FlightInformation, Wrapper } from "../../StyledComponents/Styling";

const FlightInfo = ()=>{
    return (
        <>
            <Wrapper>
                <FlightInformation className="flex">
                    <FlightInfoCards />
                </FlightInformation>
            </Wrapper>
        </>
    )
}
export default FlightInfo;