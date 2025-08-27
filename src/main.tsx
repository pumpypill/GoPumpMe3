import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const Header: React.FC = () => (
  <header className="header">
    <h1>Scumbag Steve Hat PFP Tool</h1>
  </header>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© 2023 Scumbag Steve. All rights reserved.</p>
  </footer>
);

const AboutScumbagSteve: React.FC = () => (
  <div className="about-scumbag-steve">
    <h2>Who is Scumbag Steve?</h2>
    <p>
      Scumbag Steve is one of the most iconic internet memes, originating from a photograph of Blake Boston,
      also known as "Weezy B." The image features him wearing a sideways baseball cap and a fur-lined jacket,
      giving off a stereotypical "scumbag" vibe. The meme became popular in 2011 and has been used to humorously
      depict selfish or unethical behavior.
    </p>
    <p>
      <strong>Stats:</strong>
    </p>
    <ul>
      <li>First appearance: 2011</li>
      <li>Over 1 million meme variations created</li>
      <li>Featured in countless articles and internet culture discussions</li>
      <li>Blake Boston has over 100,000 followers on social media</li>
    </ul>
  </div>
);

const ExternalButtons: React.FC = () => (
  <div className="external-buttons">
    <button onClick={() => window.open('https://apps.apple.com/us/app/bags-trade-crypto-memes/id6473196333?platform=iphone', '_blank')}>
      Download BagsApp
    </button>
    <button onClick={() => window.open('https://x.com/BlakeBoston617', '_blank')}>
      Follow Scumbag Steve
    </button>
    <button onClick={() => window.open('https://axiom.trade/@powders', '_blank')}>
      Trade on Axiom
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div className="layout">
      <ExternalButtons />
      <App />
    </div>
    <AboutScumbagSteve />
    <Footer />
  </React.StrictMode>
);
