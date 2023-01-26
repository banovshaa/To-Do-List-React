import React from 'react'

const Task = (props) => {
    return(
        <li className='d-flex justify-content-between align-items-center py-1'>
            <span style={props.Completed?{color:"green",textDecoration:"line-through"}:{color:"#000"}}>{props.Name}</span>
            <div className='d-flex'>
                <button className='done me-2' onClick={()=>props.isCompleted(props.Id)}><i className="fa-solid fa-check"></i></button>
                <button className='del' onClick={()=>props.deleteHandler(props.Id)}>x</button>
            </div>
            
        </li>
    )
}

export default Task