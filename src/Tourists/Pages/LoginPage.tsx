import { NavLink } from "react-router-dom"
import { Body, Button, UserFormContainer, UserLoginButtons, Wrapper } from "../StyledComponents/Styling"
import { LogoHeadingSection } from "../Components/LogoSection"
import { FormInputs } from "../Components/FormInput"
import { LoginButton } from "../Components/LoginButtons"

export const Login = ()=>{
    return (
        <>
            <Body>
                <Wrapper>
                    <UserFormContainer>
                        <div className="form-section">

                            <LogoHeadingSection 
                                image="assets/asset 1.png"
                                text="Smart Travel"
                                heading="Welcome"
                                subheading="Log in or Create Account to continues"
                                align = "center"
                            />

                            <FormInputs placeholder="Enter Your Email" label ="Email" />
                            <FormInputs placeholder="Enter Your Password" label ="Password" />  
                            <Button bg="#00BFFF" text="#FFF" style={{width:"100%"}}>Login</Button>

                            <p>or</p>
                        
                            <UserLoginButtons className="flex">
                                <LoginButton icon="fa-brands fa-facebook" label="Facebook" />
                                <LoginButton icon="fa-brands fa-google" label="Google" />
                                <LoginButton icon="fa-brands fa-twitter" label="Twitter" />
                            </UserLoginButtons>

                            <div className="links-section">
                                <NavLink to="/" className="nav-links" >Forget Password</NavLink>
                                <p>Don't have a account?<NavLink to="/signup" className="nav-links" >Sign up here</NavLink></p>
                            </div>
                        </div>
                        <div className="image-section">
                            <img src="assets/asset 41.jpg" alt="" />
                        </div>
                    </UserFormContainer>
                </Wrapper>
            </Body>
        </>
    )
}