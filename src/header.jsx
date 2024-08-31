import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle('fixed-body');
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <a href="https://fyrrehaven-61.dk/">
            <img
              src="https://i0.wp.com/fyrrehaven-61.dk/wp-content/uploads/logo_trans_white.png?resize=257%2C300&ssl=1"
              alt="Logo"
            />
          </a>
        </div>
        <nav className={`main-navigation ${menuActive ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#">Forside</a></li>
            <li><a href="#">Aktiviteter</a></li>
            <li><a href="#">Om huset</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
          <a
            href="#"
            target="_blank"
            className="cta-button"
            rel="noopener noreferrer"
          >
            Se priser!
          </a>
        </nav>
        <div className="language-switch">
          <a href="https://fyrrehaven-61.dk/en/summer-house-rental/" id="en-btn" className="cta-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English Flag"
            />
            English
          </a>
        </div>
        <div className={`menu-toggle ${menuActive ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
