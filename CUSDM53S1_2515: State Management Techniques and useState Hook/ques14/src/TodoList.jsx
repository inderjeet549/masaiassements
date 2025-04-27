import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function handleAddTask() {
    if (input.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  }

  function handleComplete(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {task.text}
            </span>
            {!task.completed && (
              <button onClick={() => handleComplete(task.id)} style={{ marginRight: '5px' }}>
                Complete
              </button>
            )}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
