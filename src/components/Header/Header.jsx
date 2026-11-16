import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import miniCartIcon from '../../assets/icons/mini-cart.svg';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearch() {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <header>
      <div className="header-top">
        <NavLink to="/">
          <Logo variant="header" />
        </NavLink>

        <div className="search-box">
          <input
            type="search"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSearch}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#666666"
              strokeWidth="2"
            />
            <path
              d="M16 16L21 21"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="header-actions">
          <a href="#">Cadastre-se</a>
          <button>Entrar</button>
          <div className="cart-container">
            <img src={miniCartIcon} alt="Carrinho" width="24" height="24" />
            <span className="cart-badge">2</span>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Produtos
        </NavLink>
        <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : '')}>
          Categorias
        </NavLink>
        <NavLink to="/meus-pedidos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Meus pedidos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
