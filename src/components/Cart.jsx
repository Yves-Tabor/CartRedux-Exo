function Cart({ cartItems, products, totalPrice, onUpdateQuantity, onRemove, onClose }) {
  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <aside className="cart-panel">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <li key={item.productId} className="cart-item">
                    <div className="cart-item-image">{product.image}</div>
                    <div className="cart-item-details">
                      <span className="cart-item-name">{product.name}</span>
                      <span className="cart-item-price">
                        ${(product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() =>
                            onUpdateQuantity(item.productId, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            onUpdateQuantity(item.productId, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => onRemove(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="total-price">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;
