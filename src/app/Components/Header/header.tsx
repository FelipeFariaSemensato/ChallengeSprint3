import React from "react";
import './style.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="./logo.png" className="company-logo"/>
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
          <button className="free-test-button">Teste grátis</button>
        </div>
    </header>
  );
};


export default Header;