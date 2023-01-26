import React from 'react'
import { useState } from 'react'

const MyToDoList = () => {
    const[task,setTask]=useState('')
    const[toDoList,setToDoList]=useState([])

    const changeHandler=(e)=>{ setTask(e.target.value)}
    const addHandler=()=>{
        const newTask={
            Id:toDoList.length===0?1:(toDoList[toDoList.length-1].Id)+1,
            Name:task
        }
        setToDoList([...toDoList,newTask])
    }
    const deleteHandler=(id)=>{
        setToDoList(toDoList.filter((l)=>{
           return l.Id!==id
        }))
    }
  return (
    <div className='toDoList'>
        <h2>TO-DO LIST</h2>
        <div className="top">
            <input onChange={changeHandler} type="text" placeholder='Add Something To Do...' />
            <button onClick={addHandler}>Add</button>
        </div>
        <div className="bottom">
            <ul className='w-100 px-1'>
                {
                    toDoList.map((task)=>{
                        return(
                            <li className='d-flex justify-content-between align-items-center py-1' key={task.Id}>
                                <span>{task.Name}</span>
                                <button onClick={()=>deleteHandler(task.Id)}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default MyToDoList