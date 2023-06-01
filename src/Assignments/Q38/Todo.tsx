import React, { useState } from "react";
import List from "./List";

interface TodoState {
    task: string;
    completed: boolean;
}

const TODO = () => {
    const [task, setTask] = useState<string>("");
    const [itemList, setItemList] = useState<TodoState[]>([]);
    const [toggleBtn,setToggleBtn] = useState<boolean>(false)
    const [updateId,setUpdateId] = useState<number>()
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value) }

    const handleSubmit = () => {
        if(!toggleBtn) 
            setItemList([...itemList, { task: task, completed: false }])
        else {
            setItemList(itemList.map((item,i)=> i === updateId ? {...item,task:task} : item ))
            setToggleBtn(false)
        }
        setTask("")
    }

    const deleteTask = (id:number)=>{
        setItemList(itemList.filter((item,i)=> i !== id )) }

    const doneTask = (id:number)=>{
        setItemList(itemList.map((item,i)=> i === id ? {...item,completed:!item.completed} : item )) }
    
    const updateTask = (task:string,id:number)=>{
        setToggleBtn(true)
        setUpdateId(id)
        setTask(task)
    }

    return (
        <>
            <div className="container">
                <div className="col-md-6 col-sm-10 m-auto col-12 my-3 text-dark shadow-lg p-2">
                    <h3 className="text-center fw-bolder fs-3">TODO LIST</h3>
                    <div className="d-flex justify-content-center ">
                        <input type="text" placeholder="write here..." value={task} className="form-control ms-5" onChange={handleChange} />
                        <button className="btn btn-warning mx-3 text-white" onClick={handleSubmit}>{toggleBtn ? "Update" : "Add"}</button>
                    </div>

                    <ul className="list-unstyled ms-5 me-3">
                        {
                            itemList.map((item,i) => {
                                return (
                                    <List key={i} id={i} item={item} deleteTask={ ()=> deleteTask(i)} doneTask={()=>doneTask(i)} updateTask={()=>updateTask(item.task,i)}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TODO;