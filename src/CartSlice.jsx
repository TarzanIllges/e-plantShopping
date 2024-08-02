import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart slice
const initialState = {
  items: [] // Array to hold the cart items
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        // If it exists, update its quantity
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      // Remove the item with the specified name from the cart
      state.items = state.items.filter(item => item.name !== itemName);
    },
    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart
      const item = state.items.find(item => item.name === name);
      if (item) {
        // Update its quantity
        item.quantity = quantity;
      }
    }
  }
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as the default export
export default cartSlice.reducer;

