import { NavLink } from "react-router-dom"
import { Body, UserFormContainer, UserHeadingSection,UserLogoSection, Wrapper } from "../StyledComponents/Styling"
import { FormElements } from "../Components/FormSection"
import { UserLoginButton } from "../Components/UserLoginButtons"

const Placeholder = {
    text1 : "Enter Your Email",
    text2 : "Enter Your Password",
    text3 : ""
}

export const Login = ()=>{
    return (
        <>
            <Body>
                <Wrapper>
                    <UserFormContainer>
                        <div className="form-section">
                            <UserLogoSection className="flex">
                                <img src="assets/asset 1.png" alt="" />
                                <h6>Smart Travel</h6>
                            </UserLogoSection>
                            <UserHeadingSection align="center">
                                <h1>Welcome</h1>
                                <p>Log in or Create Account to continues</p>
                            </UserHeadingSection>

                            <FormElements placeholder={Placeholder} label={true} />

                            <p>or</p>
                        
                            <UserLoginButton />

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