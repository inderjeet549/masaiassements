const item2 = document.getElementById("item2");
item2.addEventListener("click", () => {
    const parentText = item2.parentNode.textContent.trim();
    alert("Parent Node Text: " + parentText);
    if (item2.previousElementSibling) {
        console.log("Previous Sibling:", item2.previousElementSibling.textContent);
    }
    if (item2.nextElementSibling) {
        console.log("Next Sibling:", item2.nextElementSibling.textContent);
    }
});
