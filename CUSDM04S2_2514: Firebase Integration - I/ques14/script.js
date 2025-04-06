const firebaseURL = 'https://massi-assessment-default-rtdb.firebaseio.com/users';
function fetchUsers() {
  fetch(`${firebaseURL}.json`)
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = '';
      if (data) {
        Object.keys(data).forEach(key => {
          const user = data[key];
          const row = document.createElement('tr');
          row.setAttribute('id', key);
          row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button onclick="deleteUser('${key}')">Delete</button>
            </td>
          `;
          tbody.appendChild(row);
        });
      } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">No users found.</td>`;
        tbody.appendChild(row);
      }
    })
    .catch(error => console.error('Error fetching users:', error));
}
function deleteUser(key) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;
  fetch(`${firebaseURL}/${key}.json`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
    return response.json();
  })
  .then(() => {
    console.log("User deleted successfully");
    document.getElementById(key).remove(); // Remove the row from the table
  })
  .catch(error => console.error("Error deleting user:", error));
}
window.onload = fetchUsers;
