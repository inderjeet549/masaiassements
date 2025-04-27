import React, { useState } from 'react';

const DynamicEmailForm = () => {
  // State to track email addresses
  const [emails, setEmails] = useState(['']);
  // State to track error messages for each email input
  const [errors, setErrors] = useState([]);

  // Handle email input change
  const handleEmailChange = (index, e) => {
    const newEmails = [...emails];
    newEmails[index] = e.target.value;
    setEmails(newEmails);

    // Validate email on change
    validateEmail(newEmails);
  };

  // Handle adding a new email input field
  const handleAddEmail = () => {
    setEmails([...emails, '']);
    setErrors([...errors, '']); // Add empty error message for the new email field
  };

  // Validate email format
  const validateEmail = (newEmails) => {
    const newErrors = [];
    newEmails.forEach((email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        newErrors.push('Invalid email format');
      } else {
        newErrors.push('');
      }
    });
    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const invalidEmails = errors.filter((error) => error !== '');
    if (invalidEmails.length === 0) {
      alert(`Submitted Emails: ${emails.join(', ')}`);
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {emails.map((email, index) => (
          <div key={index}>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(index, e)}
              placeholder={`Email #${index + 1}`}
            />
            {errors[index] && <p style={{ color: 'red' }}>{errors[index]}</p>}
          </div>
        ))}
        <button type="button" onClick={handleAddEmail}>Add Email</button>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Entered Emails:</h3>
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicEmailForm;
