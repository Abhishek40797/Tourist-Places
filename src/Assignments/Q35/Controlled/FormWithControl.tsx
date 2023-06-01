import React, { useState } from "react";

export const FormWithControl = ()=>{
    const [names,setNames] = useState({
        fname : "",
        lname : ""
    })
    const [error,setError] = useState(false)
    const [show,setShow] = useState(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setNames({...names,[e.target.name] : e.target.value })
    }
    const {fname,lname} = names;
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(fname.length === 0 || lname.length === 0 ) 
            setError(true)
        else {
            setShow(true)
            alert(`Hi ${fname} ${lname}, Have a great day! `)  
        }
    }

    return (
        <>
            {/* <h4 style={{display: show ? "block" : "none" }}>Hi {fname} {lname}, Have a great day!</h4> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name  </label>
                <input type="text" name="fname" onChange={handleChange} style={{ border: error && fname.length<=0 ? "1px solid red" : "" }} />
                <br/><br/>
                <label htmlFor="">Last Name  </label>
                <input type="text" name="lname" onChange={handleChange} style={{ border: error && lname.length<=0 ? "1px solid red" : "" }} />
                <br/><br/>
                <input type="submit" />
            </form>
        </>
    )
}