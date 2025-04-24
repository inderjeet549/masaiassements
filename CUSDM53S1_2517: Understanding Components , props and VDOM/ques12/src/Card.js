import React from 'react';

function Card({ title, children }) {
  return (
    <div style={cardStyles}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

const cardStyles = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  width: '250px',
};

export default Card;