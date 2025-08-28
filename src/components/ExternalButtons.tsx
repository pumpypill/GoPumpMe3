import React from 'react';

const ExternalButtons = () => {
  return (
    <div className="external-buttons">
      <button
        onClick={() => window.open('https://apps.apple.com/us/app/bags-trade-crypto-memes/id6473196333?platform=iphone', '_blank')}
        aria-label="Download BagsApp from the App Store"
      >
        Download BagsApp
      </button>
      <button
        onClick={() => window.open('https://x.com/BlakeBoston617', '_blank')}
        aria-label="Follow Scumbag Steve on X (Twitter)"
      >
        Follow Scumbag Steve
      </button>
      <button
        onClick={() => window.open('https://axiom.trade/@powders', '_blank')}
        aria-label="Trade on Axiom"
      >
        Trade on Axiom
      </button>
    </div>
  );
};

export default ExternalButtons;
