// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, startEditing }) => {
  return (
    <div className={task-item ${task.completed ? 'completed' : ''}}>
      <div onClick={() => toggleComplete(task.id)}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => startEditing(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;