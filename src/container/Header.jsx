import React from 'react';
import { Navbar } from '../components/Navbar';
import Menu from '../assets/images/Menu.png'
import logoFullBlack from '../assets/logos/logo-full-black.png'
import '../styles/container/Header.css';

const Header = () => {
  return (
    <header>
      <figure className="Logo-icon">
        <img src={logoFullBlack} alt="Logo transparente" />
      </figure>
      <Navbar />
      <figure className="Menu-icon">
        <img src={Menu} alt="Menu" />
      </figure>
    </header>
  );
};

export { Header };
