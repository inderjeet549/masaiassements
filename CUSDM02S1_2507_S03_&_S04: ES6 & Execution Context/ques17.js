const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Ensure the price is a valid number, not a string or NaN
    const price = parseFloat(item.price);

    if (typeof price !== 'number' || isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    this.items.push(item);
    this.total += price; // Add the valid price to the total
  },

  getTotal() {
    // Return the formatted total with two decimal places
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Testing the corrected script
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // price as string
checkout.addItem({ name: "Milk", price: 3.50 }); // price as number

console.log(checkout.getTotal()); // Expected: "Total: $103.45"
