import React from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/container/Header.css';

const Header = () => {
  return (
    <header>
      <figure>
        <img src="/" alt="Logo transparente" />
      </figure>
      <Navbar />
      <figure className="Menu-icon">
        <img src="/" alt="Menu" />
      </figure>
    </header>
  );
};

export { Header };
