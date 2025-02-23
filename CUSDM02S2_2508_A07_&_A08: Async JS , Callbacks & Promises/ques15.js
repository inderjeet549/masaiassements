function registerUser(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      console.log("User registered.");
      callback(null);
    } else {
      callback("Registration failed");
    }
  }, 1000);
}
function sendVerification(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      console.log("Verification email sent.");
      callback(null);
    } else {
      callback("Verification failed");
    }
  }, 1000);
}
function loginUser(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      console.log("User logged in.");
      callback(null);
    } else {
      callback("Login failed");
    }
  }, 1000);
}
function displayWelcomeMessage(callback) {
  setTimeout(() => {
    console.log("Welcome to the platform!");
    callback(null);
  }, 1000);
}
registerUser((error) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  sendVerification((error) => {
    if (error) {
      console.log("Error:", error);
      return;
    }
    loginUser((error) => {
      if (error) {
        console.log("Error:", error);
        return;
      }
      displayWelcomeMessage((error) => {
        if (error) {
          console.log("Error:", error);
          return;
        }
        console.log("User registration and login workflow completed successfully.");
      });
    });
  });
});
