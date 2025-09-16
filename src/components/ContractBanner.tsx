import React, { useState } from 'react';

// Ensure React is imported for JSX to work correctly
import Notification from './Notification';

// Remove the entire ContractBanner component as shown in the image (the green contract address banner).
// Removed redundant default export to fix the error.
// Define the contract address text
const CA_TEXT = "0x1234567890abcdef1234567890abcdef12345678";

const ContractBanner: React.FC = () => {
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
    <div
      className="banner"
      style={{
        cursor: 'pointer',
        userSelect: 'all',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        background: '#4caf1b',
        color: '#fff',
        padding: '8px 16px',
        fontWeight: 500,
        fontSize: '1rem',
        letterSpacing: '0.5px',
        boxShadow: '0 2px 12px 0 rgba(76,175,27,0.18), 0 0 16px 0 #6dd40033',
        borderRadius: 4,
      }}
      onClick={handleCopy}
      title="Click to copy"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleCopy();
      }}
      role="button"
      aria-label="Copy contract address"
    >
      <strong>{CA_TEXT}</strong>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {/* Simple copy icon SVG */}
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff" />
          <rect x="3" y="3" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff" />
        </svg>
        {copied && (
          <span style={{ marginLeft: 6, color: '#0f0', fontWeight: 700, fontSize: 13 }}>Copied!</span>
        )}
      </span>
    </div>
  );
};

export default ContractBanner;
