import { H1, Para } from "../StyledComponents/Styling"

interface IProps {
    bigtext : string,
    para : string
}

export const BigTexts = ({bigtext,para}:IProps)=>{
    return (
        <>
            <H1>{bigtext}</H1>
            <Para>{para}</Para>
        </>
    )
}