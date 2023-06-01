import React, { useRef } from "react";

export const FormWithUncontrol = ()=>{
    const f_name = useRef<HTMLInputElement>(null)
    const l_name = useRef<HTMLInputElement>(null)
    
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        const fname = f_name.current?.value
        const lname = l_name.current?.value
        if(fname?.length===0)
            f_name.current!.style.borderColor = "#FF0000"
        if(lname?.length===0)
            l_name.current!.style.borderColor = "#FF0000"
        else {
            alert(`Hi ${fname} ${lname}, Have a great day!`)
            f_name.current!.value = ""
            l_name.current!.value = ""
            f_name.current!.style.borderColor = "#000000"
            l_name.current!.style.borderColor = "#000000"
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name</label>
                <input type="text" ref={f_name} />
                <br/><br/>
                <label htmlFor="">Last Name</label>
                <input type="text" ref={l_name} />
                <br/><br/>
                <input type="submit" />
            </form>
        </>
    )
}