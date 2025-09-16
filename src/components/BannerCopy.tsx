import React, { useState } from 'react';
import Notification from './Notification';

const CA_TEXT = 'CA: Ceeu2zv9wbgipjrFiCz1rf8XYRWzmw22LJHJ9k3XBAGS';

const BannerCopy: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div
        className="banner"
        style={{ cursor: 'pointer', userSelect: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
        onClick={handleCopy}
        title="Click to copy"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCopy(); }}
        role="button"
        aria-label="Copy contract address"
      >
        <strong>{CA_TEXT}</strong>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          {/* Simple copy icon SVG */}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/>
            <rect x="3" y="3" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/>
          </svg>
          {copied && (
            <span style={{ marginLeft: 6, color: '#0f0', fontWeight: 700, fontSize: 13 }}>Copied!</span>
          )}
        </span>
      </div>
      <Notification
        message={copied ? "Copied to clipboard!" : ""}
        onClose={() => setCopied(false)}
        type="success"
      />
    </>
  );
};

export default BannerCopy;
