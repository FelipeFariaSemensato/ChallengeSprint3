import React from "react";
import '../Header/style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <a href="."><img src="./logo.png" className="company-logo"/></a>
      </div>
      <div className="nav-wrapper">
        <nav className="nav-items">
          <ul className="nav-list">
            <li>Produtos</li>
            <li>Indústrias</li>
            <li>Aprendizado</li>
            <li>Suporte</li>
            <li>Empresa</li>
          </ul>
        </nav>
      </div>
      <div className="button-container">
        <div className="image-container">
          <img src="acessibilidade.png" alt="Image 1" width="50" height="32" />
          <img src="lupa.png" alt="Image 2" width="40" height="32" />
          <img src="local.png" alt="Image 3" width="32" height="32" />
          <a href="/cadastro"><img src="perfil.png" alt="Image 3" width="32" height="32" /></a>
        </div>
        <button className="free-test-button">Teste grátis</button>
      </div>
    </header>
  );
};


export default Header;