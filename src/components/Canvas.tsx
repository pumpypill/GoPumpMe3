import React, { useRef, useEffect, useState } from 'react';

interface HatPosition {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface CanvasProps {
  image: string | null;
  hat: string;
  hatPosition: HatPosition;
  setHatPosition: React.Dispatch<React.SetStateAction<HatPosition>>;
  width: number;
  height: number;
  'aria-label'?: string;
}

const MAX_IMG_SIZE = 400;

const Canvas: React.FC<CanvasProps> = ({ 
  image, hat, hatPosition, setHatPosition, width, height, ...props 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Draw the preview
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new window.Image();
    img.src = image;
    img.onload = () => {
      // Calculate scaling to fit within MAX_IMG_SIZE, preserving aspect ratio
      let drawWidth = img.width;
      let drawHeight = img.height;
      let offsetX = 0;
      let offsetY = 0;

      if (drawWidth > MAX_IMG_SIZE || drawHeight > MAX_IMG_SIZE) {
        const scale = Math.min(MAX_IMG_SIZE / drawWidth, MAX_IMG_SIZE / drawHeight);
        drawWidth = Math.round(drawWidth * scale);
        drawHeight = Math.round(drawHeight * scale);
      }

      // Center the image in the canvas
      offsetX = Math.floor((width - drawWidth) / 2);
      offsetY = Math.floor((height - drawHeight) / 2);

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Draw the hat
      const hatImg = new window.Image();
      hatImg.crossOrigin = 'anonymous';
      hatImg.src = hat; // props.hat is the imported asset URL
      hatImg.onload = () => {
        // Save context state
        ctx.save();
        // Move to position
        ctx.translate(
          hatPosition.x + (hatImg.width * hatPosition.scale) / 2,
          hatPosition.y + (hatImg.height * hatPosition.scale) / 2
        );
        // Rotate
        ctx.rotate((hatPosition.rotation * Math.PI) / 180);
        // Draw hat centered
        const w = hatImg.width * hatPosition.scale;
        const h = hatImg.height * hatPosition.scale;
        ctx.drawImage(hatImg, -w / 2, -h / 2, w, h);
        // Restore context state
        ctx.restore();
      };
      hatImg.onerror = () => {
        console.error('Failed to load the hat image.');
        alert('Error: Unable to load the hat image.');
      };
    };
    img.onerror = () => {
      console.error('Failed to load the background image.');
      alert('Error: Unable to load the background image.');
    };
  }, [image, hat, hatPosition, width, height]);

  const onCanvasMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    dragStart.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  const onCanvasMouseUp = () => { 
    dragging.current = false;
  };

  const onCanvasMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.nativeEvent.offsetX - dragStart.current.x;
    const dy = e.nativeEvent.offsetY - dragStart.current.y;
    setHatPosition(pos => ({
      ...pos,
      x: pos.x + dx,
      y: pos.y + dy
    }));
    dragStart.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  return (
    <canvas
      ref={canvasRef}
      width={width} // Explicitly set the width
      height={height} // Explicitly set the height
      style={{
        width: `${width}px`, // Ensure consistent rendering
        height: `${height}px`,
        cursor: dragging.current ? 'grabbing' : 'grab',
        background: '#222',
      }}
      {...props}
      onMouseDown={onCanvasMouseDown}
      onMouseUp={onCanvasMouseUp}
      onMouseLeave={onCanvasMouseUp}
      onMouseMove={onCanvasMouseMove}
    />
  );
};

export default Canvas;
// (No import typos found. Ensure this file is imported as './components/Canvas' in other files.)
