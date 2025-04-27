// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { database, ref, set, get, update, remove } from './firebase/firebase';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  // Fetch users from Firebase
  const fetchUsers = () => {
    const usersRef = ref(database, '/users');
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const usersArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
          }));
          setUsers(usersArray);
        } else {
          setUsers([]);
        }
      })
      .catch((error) => setError("Error fetching users: " + error.message));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Validate Email Format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Add new user
  const addUser = () => {
    if (!name || !email) {
      setError("Name and email are required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    const newUser = { name, email };
    const userRef = ref(database, '/users/' + Date.now()); // Using Date.now() as unique ID

    set(userRef, newUser)
      .then(() => {
        fetchUsers();
        setName("");
        setEmail("");
        setError("");
      })
      .catch((error) => setError("Error adding user: " + error.message));
  };

  // Edit user
  const editUser = (id) => {
    const user = users.find(user => user.id === id);
    setName(user.name);
    setEmail(user.email);
    setEditing(id);
  };

  // Save edited user
  const saveEdit = () => {
    if (!name || !email) {
      setError("Name and email are required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    const userRef = ref(database, `/users/${editing}`);
    update(userRef, { name, email })
      .then(() => {
        fetchUsers();
        setName("");
        setEmail("");
        setEditing(null);
        setError("");
      })
      .catch((error) => setError("Error updating user: " + error.message));
  };

  // Delete user
  const deleteUser = (id) => {
    const userRef = ref(database, `/users/${id}`);
    remove(userRef)
      .then(() => fetchUsers())
      .catch((error) => setError("Error deleting user: " + error.message));
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <form onSubmit={(e) => { e.preventDefault(); editing ? saveEdit() : addUser(); }}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">{editing ? "Save Changes" : "Add User"}</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name} - {user.email}</p>
            <button onClick={() => editUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
