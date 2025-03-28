const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const contentBox = document.getElementById("contentBox");
const changeBgBtn = document.getElementById("changeBgBtn");
const updateTextBtn = document.getElementById("updateTextBtn");
changeBgBtn.addEventListener("click", function () {
    const color = colorInput.value.trim().toLowerCase();
    contentBox.style.backgroundColor = color;
    if (contentBox.style.backgroundColor === "") {
        alert("Invalid color name!");
        contentBox.style.backgroundColor = "white"; // Reset to default
    }
});
updateTextBtn.addEventListener("click", function () {
    const newText = textInput.value.trim();
    if (newText === "") {
        alert("Please enter some text!");
    } else {
        contentBox.textContent = newText;
    }
});
