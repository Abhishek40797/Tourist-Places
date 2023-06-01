import React from "react";

type TodoState = {
    item : {
        task : string,
        completed : boolean,
    },
    id : number,
    deleteTask: (id:number)=> void,
    doneTask : (id:number) => void,
    updateTask : (task:string,id:number) => void
}

const List = ({item,id,deleteTask,doneTask,updateTask}:TodoState)=>{
    return (
        <>
            <li className={`border p-2  my-3 rounded ${item.completed?"text-decoration-line-through":""}`}>{item.task}
                <span className="float-end">
                    <i className="bi bi-check-circle mx-2" onClick={()=>doneTask(id)}></i>
                    <i className="bi bi-pencil-square mx-2" onClick={()=>updateTask(item.task,id)}></i>
                    <i className="bi bi-x-lg mx-2" onClick={()=>deleteTask(id)}></i>
                </span>
            </li>
        </>
    )
}
export default List;