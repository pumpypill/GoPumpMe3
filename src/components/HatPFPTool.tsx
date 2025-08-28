import React, { useState } from 'react';
import Canvas from './Canvas';

const HatPFPTool = () => {
  const [image, setImage] = useState(null);
  const [hatPosition, setHatPosition] = useState({ x: 100, y: 40, scale: 1, rotation: 0 });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.onerror = () => alert('Error reading file');
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'scumbag-steve-pfp.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div>
      <h1>Scumbag Steve hat PFP tool</h1>
      <div className="container">
        <div style={{ marginBottom: 16 }}>
          <input type="file" id="file-upload" accept="image/*" onChange={handleFileUpload} />
          <label htmlFor="file-upload">Choose File</label>
        </div>
        <div style={{ marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <label>
            Size: 
            <input
              type="range"
              min={0.2}
              max={2}
              step={0.01}
              value={hatPosition.scale}
              onChange={(e) => setHatPosition((prev) => ({ ...prev, scale: Number(e.target.value) }))}
            />
          </label>
          <label>
            Rotation: 
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={hatPosition.rotation}
              onChange={(e) => setHatPosition((prev) => ({ ...prev, rotation: Number(e.target.value) }))}
            />
            <span>{hatPosition.rotation}°</span>
          </label>
        </div>
        <div className="canvas-container">
          {image ? (
            <Canvas
              image={image}
              hat="/assets/scumbag-hat.png"
              hatPosition={hatPosition}
              setHatPosition={setHatPosition}
              width={400}
              height={400}
              aria-label="Image editing canvas for Scumbag Steve PFP tool"
            />
          ) : (
            <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Placeholder canvas area">
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

export default HatPFPTool;
