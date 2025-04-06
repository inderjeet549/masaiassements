const databaseURL = "https://massi-assessment-default-rtdb.firebaseio.com/users.json";
async function fetchUsers() {
  try {
    const response = await fetch(databaseURL);
    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    document.getElementById("error").textContent = error.message;
  }
}
function displayUsers(users) {
  const tbody = document.querySelector("#users-table tbody");
  tbody.innerHTML = "";
  for (let userId in users) {
    const user = users[userId];
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    tbody.appendChild(row);
  }
}
fetchUsers();
