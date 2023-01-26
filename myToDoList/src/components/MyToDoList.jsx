import React from 'react'
import { useState } from 'react'
import Task from './Task'

const MyToDoList = () => {

    const[task,setTask]=useState('')
    const[toDoList,setToDoList]=useState([])

    const changeHandler=(e)=>{ setTask(e.target.value)}
    const addHandler=()=>{
        const newTask={
            Id:toDoList.length===0?1:(toDoList[toDoList.length-1].Id)+1,
            Name:task,
            Completed:false
        }
        setToDoList([...toDoList,newTask])
    }
    const deleteHandler=(id)=>{
        setToDoList(toDoList.filter((l)=>{
           return l.Id!==id
        }))
    }
    const isCompleted=(id)=>{
      setToDoList(
        toDoList.map((l)=>{
            if (l.Id===id) {
                return {...l, Completed:!l.Completed}
            }else{
                return l
            }
          })
      )
    }
  return (
    <div className='toDoList'>
        <h2>TO-DO LIST</h2>
        <div className="top">
            <input onChange={changeHandler} type="text" placeholder='Add Something To Do...' />
            <button className='add' onClick={addHandler}>Add</button>
        </div>
        <div className="bottom">
            <ul className='w-100 px-1'>
                {
                    toDoList.map((task)=>{
                        return(
                            <Task key={task.Id} Id={task.Id} Name={task.Name} Completed={task.Completed} deleteHandler={deleteHandler} isCompleted={isCompleted}/>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default MyToDoList