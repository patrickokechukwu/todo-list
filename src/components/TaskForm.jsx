// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('')};
  
  const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && taskDescription) {
            if (taskToEdit) {
                editTask(taskToEdit.id, taskName, taskDescription);
            } else {
                addTask(taskName, taskDescription);
            }
            setTaskName('');
            setTaskDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
            />
            const TaskForm = ({ addTask, editTask, taskToEdit }); {
    // ...
};
            <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
        </form>
    );

export default TaskForm;
