import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  function handleAddTask() {
    if (title.trim() === '') {
      alert('Task title cannot be empty!');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    sortTasks(updatedTasks);
    setTasks(updatedTasks);
    setTitle('');
    setPriority('Medium');
  }

  function handleComplete(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    sortTasks(updatedTasks);
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function sortTasks(taskList) {
    taskList.sort((a, b) => {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  function filteredTasks() {
    return tasks.filter(task => {
      const priorityMatch = filterPriority === 'All' || task.priority === filterPriority;
      const statusMatch =
        filterStatus === 'All' ||
        (filterStatus === 'Completed' && task.completed) ||
        (filterStatus === 'Incomplete' && !task.completed);
      return priorityMatch && statusMatch;
    });
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Advanced Task Manager</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: '10px' }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>
          Filter by Priority:
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            style={{ marginLeft: '5px' }}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label>
          Filter by Status:
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{ marginLeft: '5px' }}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </label>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks().map((task) => (
          <li
            key={task.id}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: task.priority === 'High' ? '#ffe6e6' : '#f2f2f2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '8px',
            }}
          >
            <div>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  fontWeight: task.priority === 'High' ? 'bold' : 'normal',
                }}
              >
                {task.title} - {task.priority}
              </span>
            </div>

            <div>
              <button onClick={() => handleComplete(task.id)} style={{ marginRight: '5px' }}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>

              <button onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;