import React, { useRef, useState } from 'react'
import { createContext, useEffect } from 'react'

import Input from '../components/Input';
import Tasks from '../components/Tasks';

export const TaskContext = createContext();

const TaskManager = () => {
    const inputRef = useRef();
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        inputRef.current.focus();
        // const madeTasks = localStorage.getItem("tasks") || [];
        const madeTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(madeTasks);
    }, [])

    return (
        <div className='body'>
            <p className='heading m-2'>Task Manager</p>
            <TaskContext.Provider value={{ inputRef, input, setInput, setTasks, tasks, inputRef }}>
                <Input />
                <Tasks />
            </TaskContext.Provider>

        </div>
    )
}

export default TaskManager
