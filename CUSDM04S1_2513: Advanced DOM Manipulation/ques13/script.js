const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");
const outerBtn = document.getElementById("outerBtn");
const middleBtn = document.getElementById("middleBtn");
const innerBtn = document.getElementById("innerBtn");
// Function to handle click events
function showAlert(event) {
    alert(`${this.id} Clicked!`);
}
// Adding event listeners for bubbling phase (default)
outerDiv.addEventListener("click", showAlert);
middleDiv.addEventListener("click", showAlert);
innerDiv.addEventListener("click", showAlert);
outerBtn.addEventListener("click", showAlert);
middleBtn.addEventListener("click", showAlert);
innerBtn.addEventListener("click", (event) => {
    alert("Inner Button Clicked!");
    event.stopPropagation(); // Stop further event propagation (bubbling)
});
// Adding event listeners for capturing phase (useCapture = true)
outerDiv.addEventListener("click", () => alert("Outer Capturing"), true);
middleDiv.addEventListener("click", () => alert("Middle Capturing"), true);
innerDiv.addEventListener("click", () => alert("Inner Capturing"), true);
