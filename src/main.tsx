import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import AboutScumbagSteve from './components/AboutScumbagSteve';
import logo from './assets/logo.png';

const Header: React.FC = () => (
  <header className="header">
    <a href="/" aria-label="Go to homepage">
      <img src={logo} alt="Scumbag Steve Logo" style={{ height: 64, width: 64 }} />
    </a>
    <nav className="menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about-scumbag-steve">About</a></li>
        <li><a href="#steve-memecoin">Memecoin</a></li>
        <li><a href="#who-is-scumbag-steve">Meet Steve</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} STEVE on Bags App. Built in collaboration with Blake Boston.</p>
  </footer>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div className="layout">
      <App />
    </div>
    <AboutScumbagSteve />
    <Footer />
  </React.StrictMode>
);