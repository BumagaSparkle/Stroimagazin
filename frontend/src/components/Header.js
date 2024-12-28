import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/calculator">Калькулятор</Link></li>
          <li><Link to="/otzivi">Отзывы</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/services">Услуги</Link></li>
        </ul>
      </nav>
      <div className="logo-container">
        <img src={logo} alt="Логотип" className="logo" />
      </div>
    </header>
  );
};

export default Header;



