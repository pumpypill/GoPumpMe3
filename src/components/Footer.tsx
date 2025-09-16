import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer" style={{ textAlign: 'center', padding: '16px 8px' }}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <p style={{ fontSize: '1rem', margin: '0 0 8px 0' }}>
        © {new Date().getFullYear()} GoPumpMe - Making Every Trade Count
      </p>
      <p style={{ fontSize: '0.85rem', margin: '0', color: 'var(--text-light)' }}>
        GoPumpMe donates pump.fun creator rewards to GoFundMe campaigns. Join us in making a difference!
      </p>
    </div>
  </footer>
);

export default Footer;
