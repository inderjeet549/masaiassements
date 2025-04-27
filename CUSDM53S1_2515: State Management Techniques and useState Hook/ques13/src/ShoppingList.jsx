import React, { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    if (name.trim() === '' || quantity < 1) {
      alert('Please enter a valid item name and quantity greater than 0.');
      return;
    }

    const newItem = {
      id: Date.now(), // Unique ID for each item
      name,
      quantity
    };

    setItems([...items, newItem]);
    setName('');
    setQuantity(1);
  }

  function handleRemoveItem(id) {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  function handleClearAll() {
    setItems([]);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Shopping List</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {items.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              {item.name} - {item.quantity}
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the list.</p>
      )}

      {items.length > 0 && (
        <button onClick={handleClearAll} style={{ marginTop: '20px' }}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default ShoppingList;
