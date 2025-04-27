import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList />  {/* Render TaskList component here */}
    </div>
  );
}

export default App;
