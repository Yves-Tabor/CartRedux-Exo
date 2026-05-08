function Header({ totalItems, onCartClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-icon">◆</span>
          <span className="brand-name">TechStore</span>
        </div>
        <button className="cart-button" onClick={onCartClick}>
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
