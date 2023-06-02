import { FormControl, FormInput } from "../StyledComponents/Styling"

interface IProps {
    placeholder : string,
    label : string
}

export const FormInputs = ({placeholder,label}:IProps)=>{
    return (
        <>
            <FormInput pad="0px">
                { label && <label>{label}</label>}
                <FormControl placeholder={placeholder} />
            </FormInput>
        </>
    )
}