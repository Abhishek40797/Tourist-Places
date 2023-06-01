import React, { useEffect, useState } from "react";
import { Button, Form, TD, Table } from "../StyledComponents/Table";

interface TodoState {
    "userId": number,
    "id": number,
    "title": string,
    completed : boolean
}

interface FormState {
    "userId": number,
    "id": number,
    "title": string,
}

const POST = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [todos,setTodos] = useState<TodoState[]>([])
    const [data,setData] = useState<FormState>({
        userId: 0,
        id: 0,
        title: "",
    })
    const [completed,setCompleted] = useState<boolean>(false)

    const getTodos = async()=>{
        const res = await (await fetch(url)).json()
        setTodos(res)
    }

    useEffect(()=>{
        getTodos()
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        fetch(url,{
            method:"POST",
            body: JSON.stringify({
                title: data.title,
                id: data.id,
                userId: data.userId,
                completed : completed
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((res)=> console.log(res.json()))
        alert("Added")
    }
    
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="userid" name="userid" onChange={handleChange} /><br></br>
                <input type="text" placeholder="id" name="id" onChange={handleChange}   /><br></br>
                <input type="text" placeholder="title" name="title" onChange={handleChange}  /><br></br>
                <input type="checkbox" name="completed" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCompleted(e.target.checked)}  />Completed<br></br>
                <Button>Add</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Userid</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo)=>{
                            return (
                                <tr key={todo.id}>
                                    <TD>{todo.userId}</TD>
                                    <TD>{todo.id}</TD>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed?"true":"false"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default POST;