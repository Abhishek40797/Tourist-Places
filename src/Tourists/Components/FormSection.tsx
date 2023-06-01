import { Button, FormControl, FormInput } from "../StyledComponents/Styling"

interface IPlace {
    placeholder : {
        text1 : string,
        text2 : string,
        text3 : string
    },
    label : boolean
}

export const FormElements = ({placeholder,label}:IPlace)=>{
    
    return (
        <>
            <FormInput pad="0px">
                {label && <label>Email</label> }
                <FormControl placeholder={placeholder.text1} />
            </FormInput>

            <FormInput pad="0px">
                {label && <label>Password</label> }
                <FormControl placeholder={placeholder.text2} />
            </FormInput>
            
            <FormInput pad="0px">
                { !label && <FormControl placeholder={placeholder.text3} />}
            </FormInput>

            <FormInput pad="0px">
                <Button bg="#00BFFF" text="#FFF" style={{width:"100%"}}>Login</Button>
            </FormInput>
        </>
    )
}