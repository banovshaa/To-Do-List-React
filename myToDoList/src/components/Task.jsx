import React from 'react'

const Task = (props) => {
    return(
        <li className='d-flex justify-content-between align-items-center py-1' key={props.Id}>
            <span>{props.Name}</span>
            <button onClick={()=>props.deleteHandler(props.Id)}>x</button>
        </li>
    )
}

export default Task