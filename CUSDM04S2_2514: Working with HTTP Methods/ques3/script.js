const usersList = document.getElementById('users');
const form = document.getElementById('userForm');
const messageDiv = document.getElementById('message');
const BASE_URL = 'https://mockapi.io/users';
async function fetchUsers() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch users');
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    showMessage(error.message, 'error');
  }
}
function displayUsers(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    usersList.appendChild(li);
  });
}
async function addUser(userData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add user');
    }
    const newUser = await response.json();
    showMessage('User added successfully!', 'success');
    fetchUsers();
  } catch (error) {
    showMessage(`Error: ${error.message}`, 'error');
  }
}
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }
  const existingUsers = await fetch(BASE_URL).then(res => res.json());
  const emailExists = existingUsers.some(user => user.email === email);
  if (emailExists) {
    showMessage('Error: Email already exists.', 'error');
    return;
  }
  const newUser = { name, email };
  addUser(newUser);
  form.reset();
});
function showMessage(msg, type) {
  messageDiv.textContent = msg;
  messageDiv.style.color = type === 'success' ? 'green' : 'red';
}
fetchUsers();
