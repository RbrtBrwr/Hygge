import React from 'react'
import '../styles/components/Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar-container">
            <ul className="Navbar-list">
                <li className="Navbar-element">Home</li>
                <li className="Navbar-element">Nosotros</li>
                <li className="Navbar-element">Ingresa</li>
                <li className="Navbar-element">Registrate</li>
            </ul>
        </nav>
    )
}

export { Navbar };