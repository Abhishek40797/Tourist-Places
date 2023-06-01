import { ExporeC } from "../../Components/ExporeCard"
import { Cards, Wrapper } from "../../StyledComponents/Styling"

export const ExporeCards = ()=>{
    return (
        <>
            <Wrapper>
                <Cards className="flex">
                    <ExporeC />                    
                </Cards>
            </Wrapper>
        </>
    )
}