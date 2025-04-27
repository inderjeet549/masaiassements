import React, { useState } from 'react';

const UsernameForm = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      setError('Username is required!');
    } else {
      setError('');
      alert(`Submitted Username: ${username}`);
      setUsername('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='Enter your username'
            value={username}
            onChange={handleInputChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsernameForm;
