document.getElementById("addItemBtn").addEventListener("click", function () {
    const ul = document.querySelector("#itemList");
    const newItem = document.createElement("li");
    const itemCount = ul.children.length + 1;
    newItem.textContent = `Item ${itemCount}`;
    if (itemCount % 2 === 1) {
        newItem.classList.add("bold-blue");
    } else {
        newItem.classList.add("italic-red");
    }
    ul.appendChild(newItem);
});
