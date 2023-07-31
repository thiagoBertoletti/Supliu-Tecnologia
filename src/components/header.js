import React from 'react';
import logoImage from '../imgs/logo.png'; 
import './stylescomponents/header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <nav className="navbar">
          <div className="navbar-left">
          <img src={logoImage} alt="Logo" />
          </div>
          <div className="navbar-right">
            <span className="font-Disco">Discografia</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
