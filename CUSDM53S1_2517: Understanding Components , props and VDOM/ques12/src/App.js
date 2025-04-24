// src/App.js
import React from 'react';
import Card from './Card';  // Import the Card component

// Parent component that renders multiple cards
function App() {
  return (
    <div style={appStyles}>
      <Card title="Card 1 Title">
        <p>This is the content for Card 1.</p>
      </Card>
      <Card title="Card 2 Title">
        <p>This is the content for Card 2. You can put anything here!</p>
      </Card>
      <Card title="Card 3 Title">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  );
}

// Inline styles for the parent component
const appStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  flexWrap: 'wrap',
};

export default App;
