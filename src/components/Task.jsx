import React from 'react'

const Task = ({ name, completed, handleChange, handleDelete }) => {
    return (
        <div className='flex items-center justify-start gap-5'>
            <div className='flex items-center justify-start gap-2 my-2 mx-1'>
                <p style={{ textDecoration: completed ? "line-through" : "none", color: completed ? "gray" : "black"}} className='transition-all duration-150 ease-in-out'>{name}</p>
                <input type="checkbox" checked={completed} onClick={handleChange} />
            </div>
            <button onClick={handleDelete} className='delete'>Delete</button>
        </div>
    )
}

export default Task
