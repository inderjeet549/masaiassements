const tasksList = document.getElementById('tasks');
const messageDiv = document.getElementById('message');
const editModal = document.getElementById('editModal');
const closeModalBtn = document.getElementById('closeModal');
const editForm = document.getElementById('editTaskForm');
const editTitle = document.getElementById('editTitle');
const editStatus = document.getElementById('editStatus');
let currentTaskId = null;
const BASE_URL = 'https://mockapi.io/tasks';
async function fetchTasks() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    const tasks = await res.json();
    displayTasks(tasks);
  } catch (err) {
    showMessage(err.message, 'error');
  }
}
function displayTasks(tasks) {
  tasksList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.title} (${task.status})</span>
      <div>
        <button class="edit-btn" onclick="openEditModal('${task.id}', '${task.title}', '${task.status}')">Edit</button>
        <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
      </div>
    `;
    tasksList.appendChild(li);
  });
}
function openEditModal(id, title, status) {
  currentTaskId = id;
  editTitle.value = title;
  editStatus.value = status;
  editModal.classList.remove('hidden');
}
closeModalBtn.onclick = () => {
  editModal.classList.add('hidden');
};
editForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const updatedTask = {
    title: editTitle.value,
    status: editStatus.value
  };
  try {
    const res = await fetch(`${BASE_URL}/${currentTaskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)
    });
    if (!res.ok) throw new Error('Failed to update task');
    showMessage('Task updated successfully!', 'success');
    editModal.classList.add('hidden');
    fetchTasks();
  } catch (err) {
    showMessage(err.message, 'error');
  }
});
async function deleteTask(id) {
  const confirmed = confirm('Are you sure you want to delete this task?');
  if (!confirmed) return;
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete task');
    showMessage('Task deleted successfully!', 'success');
    fetchTasks();
  } catch (err) {
    showMessage(err.message, 'error');
  }
}
function showMessage(msg, type) {
  messageDiv.textContent = msg;
  messageDiv.style.color = type === 'success' ? 'green' : 'red';
}
fetchTasks();
