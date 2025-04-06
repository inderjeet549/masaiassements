const databaseURL = "https://massi-assessment-default-rtdb.firebaseio.com/users";
const userTable = document.getElementById("userTable");
const editForm = document.getElementById("editForm");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const updateUserBtn = document.getElementById("updateUserBtn");
let currentUserId = null;
async function fetchUsers() {
  try {
    const res = await fetch(`${databaseURL}.json`);
    const data = await res.json();
    userTable.innerHTML = "";
    if (data) {
      Object.keys(data).forEach(id => {
        const user = data[id];
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><button onclick="editUser('${id}', '${user.name}', '${user.email}')">Edit</button></td>
        `;
        userTable.appendChild(tr);
      });
    }
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}
function editUser(id, name, email) {
  currentUserId = id;
  editName.value = name;
  editEmail.value = email;
  editForm.style.display = "block";
}
updateUserBtn.addEventListener("click", async () => {
  const updatedName = editName.value;
  const updatedEmail = editEmail.value;
  try {
    const res = await fetch(`${databaseURL}/${currentUserId}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName, email: updatedEmail })
    });
    if (res.ok) {
      alert("User updated successfully!");
      editForm.style.display = "none";
      fetchUsers();
    }else{
      alert("Failed to update user.");
    }
  }catch(err) {
    console.error("Error updating user:", err);
  }
});
fetchUsers();
