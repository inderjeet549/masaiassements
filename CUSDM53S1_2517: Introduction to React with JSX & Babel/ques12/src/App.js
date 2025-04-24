import React from 'react';

function App() {
  const items = ["React", "JavaScript", "CSS"];  // Hardcoded list of items

  return (
    <div>
      <h1>Programming Languages and Libraries</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
