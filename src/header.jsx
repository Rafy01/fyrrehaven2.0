import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState('da'); // 'da' for dansk, 'en' for engelsk
  const [menuActive, setMenuActive] = useState(false); // New state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'da' ? 'en' : 'da'));
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle('fixed-body');
  };

  const flagSrc = language === 'da'
    ? 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
    : 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg';

  // Menu items based on language
  const menuItems = {
    da: {
      home: 'Forside',
      activities: 'Aktiviteter',
      about: 'Om huset',
      contact: 'Kontakt',
      cta: 'Se priser!'
    },
    en: {
      home: 'Home',
      activities: 'Activities',
      about: 'About Us',
      contact: 'Contact',
      cta: 'See Prices!'
    }
  };

  return (
    <header className={`site-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src="https://i0.wp.com/fyrrehaven-61.dk/wp-content/uploads/logo_trans_white.png?resize=257%2C300&ssl=1" alt="Logo" />
          </a>
        </div>
        <nav className={`main-navigation ${menuActive ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#">{menuItems[language].home}</a></li>
            <li><a href="#">{menuItems[language].activities}</a></li>
            <li><a href="#">{menuItems[language].about}</a></li>
            <li><a href="#">{menuItems[language].contact}</a></li>
          </ul>
          <a href="#" target="_blank" className="cta-button" rel="noopener">{menuItems[language].cta}</a>
        </nav>
        <div className="language-switch" onClick={toggleLanguage}>
          <a href="#" className="cta-button">
            <img src={flagSrc} alt={language === 'en' ? 'Dansk Flag' : 'English Flag'} /> 
            {language === 'da' ? 'English' : 'Dansk'}
          </a>
        </div>
        <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
