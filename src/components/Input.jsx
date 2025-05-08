import React from 'react'
import { useState, useContext } from 'react'

import { TaskContext } from '../main/TaskManager'

const Input = () => {
    const { input, setInput, setTasks, inputRef, tasks } = useContext(TaskContext)
    function handleTask() {
        if (input !== "") {
            const newTask = [{ task: input, completed: false }];
            setTasks(() => {
                const newTasks = [...tasks, ...newTask];
                localStorage.setItem('tasks', JSON.stringify(newTasks));
                console.info(newTasks)
                return newTasks;
            });
            setInput("");
        }
    }
    return (
        <>
            <div className='flex items-center justify-center m-2 gap-3'>
                <input type="text" value={input} className='input pl-1.5 w-xs' onChange={(e) => { setInput(e.currentTarget.value) }} ref={inputRef} />
                <button className='input px-1' onClick={handleTask}>Enter Task</button>
            </div>
        </>
    )
}

export default Input