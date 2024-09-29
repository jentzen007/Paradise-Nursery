import React from 'react';

function Cart({ cart, updateQuantity, removeFromCart, checkout }) {
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }
  const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div>
              <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                style={{ width: "40px", textAlign: "center" }}
              />
              <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
            </div>
            <p className="total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button className="CheckoutButton" onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
