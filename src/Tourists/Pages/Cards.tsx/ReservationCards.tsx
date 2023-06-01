import { ReservationC } from "../../Components/ReservationsCard"
import { Cards } from "../../StyledComponents/Styling"

export const ReservationCards = ()=>{
    return (
        <>
            <Cards className="flex">
                <ReservationC />                  
            </Cards>
        </>
    )
}