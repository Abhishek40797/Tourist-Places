import React, { useState } from "react";
import { Button, Center, FormInput } from "../StyledComponents/GlobalStyle";
import { useNavigate } from "react-router-dom";

interface IData {
    uname : string,
    password : string
}

export const Login = ()=>{

    const [data,setData] = useState<IData>({
        uname : "",
        password : ""
    })
    const [validate,setValidate] = useState(false)
    const navigate = useNavigate()
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleLogin = () => {
        if(data.uname.length===0 || data.password.length===0) {
            setValidate(true)
        }
        else {
            navigate("/Dashboard")
        }
    }

    return (
        <>
            <Center width="30%">
                <h4>Login Here</h4>
                <div className="input-group">
                    <label>Username</label><br/>
                    <FormInput type="text" value={data.uname} name="uname" placeholder="username" onChange={handleChange} />
                    <span style={{color:"#FF0000"}}>{ validate && data.uname.length <=0  ? "Please fill the Username field" : "" }</span>
                </div>
                <div className="input-group">
                    <label>Password</label><br/>
                    <FormInput type="password" value={data.password} name="password" placeholder="password" onChange={handleChange} />
                    <span style={{color:"#FF0000"}}>{ validate && data.password.length <=0  ? "Please fill the password field" : "" }</span>
                </div>
                <Button bg="#3F00FF" onClick={handleLogin} >Login</Button>
            </Center>
        </>
    )
}