import { NavLink } from "react-router-dom"
import { Body, UserFormContainer, UserHeadingSection,UserLogoSection, Wrapper } from "../StyledComponents/Styling"
import { FormElements } from "../Components/FormSection"
import { UserLoginButton } from "../Components/UserLoginButtons"

const Placeholder = {
    text1 : "Full Name",
    text2 : "Email",
    text3 : "Password"
}

export const Signup = ()=>{
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
                            <UserHeadingSection align="justify">
                                <h1>Sign up</h1>
                                <p>Your details are required here</p>
                            </UserHeadingSection>

                            <FormElements placeholder={Placeholder} label={false} />
                            
                            <div className="links-section">
                                <NavLink to="/login" className="nav-links" style={{color:"#000"}} >Already Have a Account</NavLink>
                                <p>or</p>
                            </div>
                        
                            <UserLoginButton />
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