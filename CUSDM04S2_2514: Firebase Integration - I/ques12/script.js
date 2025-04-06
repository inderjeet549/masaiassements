const form = document.getElementById('userForm');
const message = document.getElementById('message');
const databaseURL = "https://massi-assessment-default-rtdb.firebaseio.com/users.json";
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name === "" || email === "") {
    message.textContent = "Please fill in both fields.";
    message.style.color = "red";
    return;
  }
  const newUser = {
    name: name,
    email: email
  };
  try {
    const response = await fetch(databaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
    if (!response.ok) {
      throw new Error("Failed to add user.");
    }
    message.textContent = "User added successfully!";
    message.style.color = "green";
    form.reset(); // Clear the form after successful addition
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});
