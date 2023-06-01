import { Button, UserLoginButtons } from "../StyledComponents/Styling"
import { LoginMode } from "../data/LoginMode"

export const UserLoginButton = ()=>{
    return (
        <>
            <UserLoginButtons className="flex">
                {
                    LoginMode.map((mode,i)=>{
                        return (
                            <Button key={i} className="buttons" bg="transparent" text="#000"><img src={mode.src} alt="" className="logo" />{mode.text}</Button>  
                        )
                    })
                }
            </UserLoginButtons>
        </>
    )
}