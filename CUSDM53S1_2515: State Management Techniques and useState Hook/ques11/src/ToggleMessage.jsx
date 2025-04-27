import React, { useState } from 'react';

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <p>Hello, welcome to React state management!</p>
      )}
    </div>
  );
}

export default ToggleMessage;