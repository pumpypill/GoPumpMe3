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