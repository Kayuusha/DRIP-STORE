import './Header.css'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <header>
      <div className="header-top">
        <Logo variant="header" />

        <div className="search-box">
          <input
          type="search"
          placeholder="Pesquisar produto..."
          />
          <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 3H5L7.2 14.2C7.3 14.7 7.8 15 8.3 15H18C18.5 15 18.9 14.7 19.1 14.2L21 7H6"
    stroke="#1F1F1F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <circle cx="9" cy="19" r="1.5" fill="#1F1F1F" />
  <circle cx="18" cy="19" r="1.5" fill="#1F1F1F" />
            </svg>
           </svg>
           <span className="cart-badge">2</span>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#" className='active'>Home</a>
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Meus pedidos</a>
      </nav>
    </header>
  )
}

export default Header