import React, { useState } from 'react';
import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <header className="header">
      <h1 className="title">Wride</h1>
      <nav className="nav">
        <button 
          onClick={toggleMenu} 
          className="menu-button" 
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>

        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li className="menu-item">
            Perfil <FaUser className="icon" />
          </li>
          <li className="menu-item">
            Cerrar sesión <FaSignOutAlt className="icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


