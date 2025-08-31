import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import ExternalButtons from './components/ExternalButtons';
import AboutScumbagSteve from './components/AboutScumbagSteve'; // Import the component

const Header: React.FC = () => (
  <header className="header">
    <h1>Steve&apos;s Scumbags Community</h1>
    <p className="subheading">Join us in celebrating one of the internet's most iconic memes!</p>
  </header>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Scumbag Steve Community. Built with love for meme culture.</p>
  </footer>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div className="layout">
      <ExternalButtons />
      <App />
    </div>
    <AboutScumbagSteve /> {/* Use the imported component */}
    <Footer />
  </React.StrictMode>
);