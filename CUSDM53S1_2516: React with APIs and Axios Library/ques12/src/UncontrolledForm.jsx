import React, { useRef } from 'react';

const UncontrolledForm = () => {
  // Create a ref for the input field
  const inputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the current value of the input field using ref
    const enteredText = inputRef.current.value;

    // Display an alert with the entered text
    alert(`Entered Text: ${enteredText}`);

    // Clear the input field after submission
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="textInput">Enter Text:</label>
          <input
            type="text"
            id="textInput"
            ref={inputRef} // Attach the ref to the input field
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
