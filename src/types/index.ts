// Shared types for Meme Generator Template

export interface MemeCanvasProps {
  image: string | null;
  topText: string;
  bottomText: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export interface TextInputsProps {
  topText: string;
  setTopText: (txt: string) => void;
  bottomText: string;
  setBottomText: (txt: string) => void;
}

// Add more shared types/interfaces as needed
