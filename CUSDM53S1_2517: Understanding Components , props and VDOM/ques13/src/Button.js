import React from 'react';

function Button({ children, highlighted }) {
  return (
    <button className={`cta-button ${highlighted ? 'highlighted-button' : ''}`}>
      {children}
    </button>
  );
}

export default Button;