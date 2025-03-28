# 🛒 **Multi-User Shopping Cart Application**  

## **📌 Overview**  
This is a **Multi-User Shopping Cart** application that allows users to log in with a **unique username** and maintain separate shopping carts. The cart persists using **localStorage**, ensuring data is saved across page reloads. Users can **add items, update quantities, remove items**, and see the **total cost** dynamically.

---

## **🚀 Features**  
✅ **User Authentication** – Users log in with a unique username.  
✅ **Separate Carts** – Each user has an independent cart.  
✅ **Add Items** – Users can add items with a name, price, and quantity.  
✅ **Edit Quantity** – Modify the quantity of any item.  
✅ **Remove Items** – Remove items from the cart.  
✅ **Total Cost Calculation** – Displays the total cost of all items.  
✅ **Persistent Storage** – Carts are saved in **localStorage** as JSON.  
✅ **Logout Option** – Users can log out and switch accounts.  

---

## **🛠 How It Works**  

1. **Login**:  
   - Enter a **unique username** and click "Login".  
   - If the user has a **saved cart**, it will **load automatically**.  

2. **Adding Items**:  
   - Enter an **Item Name**, **Price**, and **Quantity**.  
   - Click the **"Add Item"** button to add it to the cart.  

3. **Editing Quantity**:  
   - Change the **quantity** directly in the input field.  
   - The **total cost updates** dynamically.  

4. **Removing Items**:  
   - Click the **"Remove"** button to delete an item from the cart.  

5. **Logging Out**:  
   - Click the **"Logout"** button to **switch users** or **clear session**.  

---

## **📂 Project Structure**  
```
📦 Multi-User Shopping Cart
 ┣ 📜 index.html        # Main HTML file
 ┣ 📜 script.js         # JavaScript logic
 ┗ 📜 README.md         # Project documentation
```

---

## **📌 Code Breakdown**  

### **1️⃣ Storing User Cart in localStorage**  
Each **user** has a **separate cart** stored in localStorage:  
```json
{
  "user1": [
    { "itemName": "Laptop", "price": 1000, "quantity": 1 },
    { "itemName": "Mouse", "price": 20, "quantity": 2 }
  ],
  "user2": [
    { "itemName": "Keyboard", "price": 50, "quantity": 1 }
  ]
}
```

### **2️⃣ Adding Items to Cart**
```js
function addItem() {
    const itemName = document.getElementById('itemName').value.trim();
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0 || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Please enter valid item details!");
        return;
    }

    let cartData = JSON.parse(localStorage.getItem('cart')) || {};
    let userCart = cartData[currentUser] || [];

    userCart.push({ itemName, price: itemPrice, quantity: itemQuantity });
    cartData[currentUser] = userCart;
    localStorage.setItem('cart', JSON.stringify(cartData));

    loadCart();
}
```
✅ **Data Validation** ensures correct item entry.  
✅ **localStorage.getItem('cart')** retrieves **existing user cart**.  

---

## **📌 Technologies Used**  
🟢 **HTML** – Structure  
🟢 **CSS** – Styling  
🟢 **JavaScript** – Functionality & localStorage  

---

## **📌 How to Run the Project**  
1. **Clone the repository**:  
   ```sh
   git clone https://github.com/your-username/multi-user-shopping-cart.git
   ```
2. **Open `index.html` in a browser**.  
3. **Enter a username** to start shopping.  
4. **Add, edit, and remove items** dynamically.  

---

## **📌 Future Enhancements**  
🚀 **User Authentication** – Implement a login system.  
🚀 **Database Integration** – Use Firebase or MongoDB.  
🚀 **Responsive Design** – Improve UI for mobile.  

---

## **👨‍💻 Author**  
📌 **Inderjeet Singh**  
📌 **[GitHub Profile](https://github.com/inderjeet549)**  
