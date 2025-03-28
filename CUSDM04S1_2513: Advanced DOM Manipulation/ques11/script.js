// Selecting the buttons and container
const addButton = document.getElementById("addParagraph");
const removeButton = document.getElementById("removeParagraph");
const container = document.getElementById("paragraphContainer");

// Function to add a new paragraph
addButton.addEventListener("click", () => {
    const newPara = document.createElement("p"); // Create a new paragraph element
    newPara.textContent = "This is a new paragraph."; // Set its text
    container.appendChild(newPara); // Append it to the container
});

// Function to remove the last added paragraph
removeButton.addEventListener("click", () => {
    if (container.lastChild) {
        container.removeChild(container.lastChild); // Remove the last paragraph
    }
});
