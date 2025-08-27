import React, { useRef, useEffect } from 'react';

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
}

const Canvas: React.FC<CanvasProps> = ({ 
  image, hat, hatPosition, setHatPosition, width, height 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // Draw the preview
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseImg = new window.Image();
    baseImg.src = image;
    baseImg.onload = () => {
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw subject image
      ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

      const hatImg = new window.Image();
      hatImg.crossOrigin = 'anonymous';
      hatImg.src = hat;
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
    baseImg.onerror = () => {
      console.error('Failed to load the background image.');
      alert('Error: Unable to load the background image.');
    };
  }, [image, hat, hatPosition]);

  const onCanvasMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastPos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  const onCanvasMouseUp = () => { 
    dragging.current = false; 
  };

  const onCanvasMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.nativeEvent.offsetX - lastPos.current.x;
    const dy = e.nativeEvent.offsetY - lastPos.current.y;
    setHatPosition(pos => ({
      ...pos,
      x: pos.x + dx,
      y: pos.y + dy
    }));
    lastPos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ 
        width: width * 0.75, 
        height: height * 0.75, 
        cursor: dragging.current ? 'grabbing' : 'grab', 
        background: '#222' 
      }}
      onMouseDown={onCanvasMouseDown}
      onMouseUp={onCanvasMouseUp}
      onMouseLeave={onCanvasMouseUp}
      onMouseMove={onCanvasMouseMove}
    />
  );
};

export default Canvas;
