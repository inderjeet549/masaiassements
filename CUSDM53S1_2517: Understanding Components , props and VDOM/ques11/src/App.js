// src/App.js
import React, { useState } from 'react';

function ColorToggleButton() {
  const [color, setColor] = useState('blue');

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <button
      onClick={toggleColor}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Color: {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

export default ColorToggleButton;
