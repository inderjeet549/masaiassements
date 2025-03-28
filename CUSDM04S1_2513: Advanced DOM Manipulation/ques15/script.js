const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const showAllButton = document.getElementById("showAll");
const showCompletedButton = document.getElementById("showCompleted");
const showIncompleteButton = document.getElementById("showIncomplete");
const sortTasksButton = document.getElementById("sortTasks");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const incompleteCount = document.getElementById("incompleteCount");
// Array to store tasks
let tasks = [];
// Function to update the task list UI
function updateTaskList(filter = "all") {
    taskList.innerHTML = ""; // Clear previous tasks
    let filteredTasks = tasks;
    // Filtering logic
    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "incomplete") {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    // Rendering tasks
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task";
        if (task.completed) li.classList.add("completed");
        // Checkbox for completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("data-id", task.id);
        // Task text
        const span = document.createElement("span");
        span.textContent = task.text;
        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("data-id", task.id);
        // Append elements
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
    updateCounters();
}
// Function to update counters
function updateCounters() {
    totalCount.textContent = tasks.length;
    completedCount.textContent = tasks.filter(task => task.completed).length;
    incompleteCount.textContent = tasks.filter(task => !task.completed).length;
}
// Add Task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }
    const newTask = {
        id: Date.now().toString(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = ""; // Clear input
    updateTaskList();
});
// Event Delegation for Task Actions
taskList.addEventListener("click", (e) => {
    const taskId = e.target.getAttribute("data-id");
    // Toggle completion
    if (e.target.tagName === "INPUT") {
        tasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: e.target.checked } : task
        );
    }
    // Delete task
    if (e.target.tagName === "BUTTON") {
        tasks = tasks.filter(task => task.id !== taskId);
    }
    updateTaskList();
});
// Filter Buttons
showAllButton.addEventListener("click", () => updateTaskList("all"));
showCompletedButton.addEventListener("click", () => updateTaskList("completed"));
showIncompleteButton.addEventListener("click", () => updateTaskList("incomplete"));
// Sort Tasks Alphabetically
sortTasksButton.addEventListener("click", () => {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    updateTaskList();
});
