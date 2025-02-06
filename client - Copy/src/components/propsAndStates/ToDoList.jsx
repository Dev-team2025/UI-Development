import React, { useState } from 'react'

function ToDoList() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput('');
        }
    };
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add a new Task Here...' />
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>{task}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList
