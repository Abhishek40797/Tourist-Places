import { NavLink } from "react-router-dom"
import { Body, Button, UserFormContainer, UserLoginButtons, Wrapper } from "../StyledComponents/Styling"
import { LogoHeadingSection } from "../Components/LogoSection"
import { FormInputs } from "../Components/FormInput"
import { LoginButton } from "../Components/LoginButtons"

export const Signup = ()=>{
    return (
        <>
            <Body>
                <Wrapper>
                    <UserFormContainer>
                        <div className="form-section">
                            
                            <LogoHeadingSection 
                                image="assets/asset 1.png"
                                text="Smart Travel"
                                heading="Sign up"
                                subheading="Log in or Create Account to continues"
                                align="justify"
                            />

                            <FormInputs placeholder="Full Name" label ="" />
                            <FormInputs placeholder="Email" label ="" />  
                            <FormInputs placeholder="Password" label ="" /> 
                            <Button bg="#00BFFF" text="#FFF" style={{width:"100%"}}>Register</Button>
                            
                            <div className="links-section">
                                <NavLink to="/login" className="nav-links" style={{color:"#000"}} >Already Have a Account</NavLink>
                                <p>or</p>
                            </div>
                        
                            <UserLoginButtons className="flex">
                                <LoginButton icon="fa-brands fa-facebook" label="Facebook" />
                                <LoginButton icon="fa-brands fa-google" label="Google" />
                                <LoginButton icon="fa-brands fa-twitter" label="Twitter" />
                            </UserLoginButtons>

                        </div>
                        <div className="image-section">
                            <img src="assets/asset 42.png" alt="" />
                        </div>
                    </UserFormContainer>
                </Wrapper>
            </Body>
        </>
    )
}