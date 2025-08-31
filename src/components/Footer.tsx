import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p style={{ fontSize: '1rem', color: '#888' }}>
        © {new Date().getFullYear()} Scumbag Steve. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
