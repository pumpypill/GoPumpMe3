import React, { useState, useEffect, useRef } from 'react';

// Import assets directly to avoid potential path issues
import logo from '../assets/example.png';
import logoDark from '../assets/example_dark.png';
import hamburgerIcon from '../assets/hamburger.png';
import socialMediaIcon from '../assets/social-media.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Handle clicks outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen && 
        menuRef.current && 
        hamburgerRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Detect dark mode
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.body.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <a href="/" aria-label="Go to homepage" className="logo-link">
          <img
            src={isDark ? logoDark : logo}
            alt="GoPumpMe Logo"
            className="logo-image"
          />
        </a>
        
        <div className="desktop-menu">
          <ul className="desktop-menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#donations">Donations</a></li>
            <li>
              <a 
                href="https://x.com/i/communities/1963018723624898836" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="header-right">
        {/* Trade on Axiom Button */}
        <a 
          href="https://www.axiom.com/trade" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="trade-button"
        >
          Trade on Axiom
        </a>
        
        {/* Social Media Icon */}
        <a 
          href="https://twitter.com/yourhandle" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon-link"
        >
          <img 
            src={socialMediaIcon} 
            alt="Social Media" 
            className="social-icon"
          />
        </a>
      </div>
      
      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        ref={hamburgerRef}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <nav
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu-items">
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#donations" onClick={() => setMenuOpen(false)}>Donations</a></li>
          <li>
            <a 
              href="https://x.com/i/communities/1963018723624898836" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Community
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;