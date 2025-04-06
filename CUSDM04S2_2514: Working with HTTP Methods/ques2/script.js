const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');
const BASE_URL = 'https://mockapi.io/users'; 
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!name || !email || !password) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }
  const userData = {
    name,
    email,
    password,
  };
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register.');
    }
    const result = await response.json();
    showMessage('Registration successful!', 'success');
    form.reset();
  } catch (error) {
    showMessage(`Error: ${error.message}`, 'error');
  }
});
function showMessage(msg, type) {
  messageDiv.textContent = msg;
  messageDiv.style.color = type === 'success' ? 'green' : 'red';
}
