import React from 'react';
import '../styles/Header.css';


const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="header-container">
        <a href="/">
          <h1 className="logo">Ygor Carvalho</h1>
        </a>

        <nav>
          {/* O menu hamburger será implementado com estado em React */}
          <input type="checkbox" id="menu-hamburguer" />

          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>           
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
