import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../main/TaskManager'

const Body = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <>
            {tasks.map((task, items) => {
                return (
                    <div key={items} className='flex items-center justify-between px-2 py-1'>
                        <p>{task}</p>
                        <button className='border-1 border-black rounded-md p-0.5'>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default Body
