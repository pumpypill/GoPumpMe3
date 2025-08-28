import React, { useState } from 'react';
import scumbagHat from './assets/scumbag-hat.png';
import Canvas from './components/Canvas';
import './styles.css';

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

const WhyThisTool: React.FC = () => (
  <div className="why-this-tool" style={{ maxWidth: 800, margin: '24px auto', background: '#1a1a1a', padding: 24, borderRadius: 12, boxShadow: '0px 4px 10px rgba(0,0,0,0.5)', color: '#fff' }}>
    <p>
      <strong>Why this tool?</strong> This tool allows you to add the iconic Scumbag Steve hat to any image,
      letting you create your own personalized memes and share the fun with friends!
    </p>
  </div>
);

const ExternalButtons: React.FC = () => (
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

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number } | null>(null);
  const [hatPosition, setHatPosition] = useState({ x: 100, y: 40, scale: 1, rotation: 0 });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new window.Image();
      img.onload = () => {
        setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        setImage(ev.target?.result as string);
      };
      img.src = ev.target?.result as string;
    };
    reader.onerror = () => alert('Error reading file');
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    try {
      const link = document.createElement('a');
      link.download = `scumbag-steve-pfp.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image');
    }
  };

  return (
    <>
      <Header />
      <div className="layout">
        <ExternalButtons />
        <div style={{ flex: 1 }}>
          <WhyThisTool />
          <h1>Hat Tool - Add The Scumbag Hat to Any Picture</h1>
          <p className="tagline">Create your own Scumbag Steve memes by adding the iconic hat to any picture!</p>
          <div className="container">
            <div style={{ marginBottom: 16 }}>
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label htmlFor="file-upload">Choose File</label>
            </div>
            <div style={{ marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <label>
                Size:&nbsp;
                <input
                  type="range"
                  min={0.2}
                  max={2}
                  step={0.01}
                  value={hatPosition.scale}
                  onChange={e => setHatPosition(pos => ({ ...pos, scale: Number(e.target.value) }))}
                />
              </label>
              <label>
                Rotation:&nbsp;
                <input
                  type="range"
                  min={-180}
                  max={180}
                  step={1}
                  value={hatPosition.rotation}
                  onChange={e => setHatPosition(pos => ({ ...pos, rotation: Number(e.target.value) }))}
                />
                <span>{hatPosition.rotation}°</span>
              </label>
            </div>
            <div className="canvas-container">
              {image && imageSize ? (
                <Canvas
                  image={image}
                  hat={scumbagHat}
                  hatPosition={hatPosition}
                  setHatPosition={setHatPosition}
                  width={imageSize.width}
                  height={imageSize.height}
                  aria-label="Image editing canvas for Scumbag Steve PFP tool"
                />
              ) : (
                <div
                  style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Placeholder canvas area"
                >
                  <p>Upload an image to start</p>
                </div>
              )}
            </div>
            <button onClick={handleDownload} disabled={!image}>
              Download Scumbag PFP
            </button>
          </div>
          <div className="tip">
            <p>Tip: Drag the hat to position it. Use the sliders to resize and rotate.</p>
          </div>
        </div>
      </div>
      <AboutScumbagSteve />
      <Footer />
    </>
  );
};

export default App;