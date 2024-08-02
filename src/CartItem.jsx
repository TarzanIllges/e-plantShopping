import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));
  };

  const handleQuantityChange = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.name} className="cart-item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: {item.cost}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value, 10))}
          />
        </div>
      ))}
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;



