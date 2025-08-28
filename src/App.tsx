import React, { useRef, useState } from 'react';
import scumbagHat from './assets/scumbag-hat.png';
import Canvas from './components/Canvas';
import './styles.css';

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [hatPosition, setHatPosition] = useState({ x: 100, y: 40, scale: 1, rotation: 0 });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target?.result as string);
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
    <div>
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
          {image ? (
            <Canvas
              image={image}
              hat={scumbagHat}
              hatPosition={hatPosition}
              setHatPosition={setHatPosition}
              width={400}
              height={400}
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
  );
};

export default App;