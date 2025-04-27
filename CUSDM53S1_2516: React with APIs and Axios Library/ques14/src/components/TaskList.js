import React, { useState, useEffect } from 'react';
import { database, ref, get } from '../firebase/firebase';  // Corrected import

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const tasksRef = ref(database, '/tasks');  // Reference to '/tasks' node
    get(tasksRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const tasksArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
          }));
          setTasks(tasksArray);
        } else {
          setError("No tasks found.");
        }
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
        setError("Failed to fetch tasks. Please try again later.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
}

export default TaskList;
