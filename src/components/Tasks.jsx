import React from 'react'
import { useContext } from 'react'

import { TaskContext } from '../main/TaskManager'
import Task from './Task'

const Tasks = () => {
    const { tasks, setTasks } = useContext(TaskContext)

    const handleChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(() => {
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        });
    };

    const handleDelete = (index) => {
        const newTask = [...tasks];
        const update = newTask.filter((_, i) => i !== index);
        setTasks(() => {
            localStorage.setItem('tasks', JSON.stringify(update));
            return update;
        });
    };

    return (
        <>
            <div className='content'>
                <p className='heading'>Incomplete</p>
                {tasks.map((task, index) => (
                    <>
                        {!task.completed && (
                            <Task
                                key={index}
                                name={task.task}
                                completed={task.completed}
                                handleChange={() => handleChange(index)}
                                handleDelete={() => handleDelete(index)}
                            />
                        )}
                    </>
                ))}
            </div>
            <div className='content'>
                <p className='heading'>Completed</p>
                {tasks.map((task, index) => (
                    <>
                        {task.completed && (
                            <Task
                                key={index}
                                name={task.task}
                                completed={task.completed}
                                handleChange={() => handleChange(index)}
                                handleDelete={() => handleDelete(index)}
                            />
                        )}
                    </>
                ))}
            </div>
        </>
    );
}

export default Tasks
