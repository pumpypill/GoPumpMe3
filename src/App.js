import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import scumbagHat from './assets/scumbag-hat.png';
import Canvas from './components/Canvas';
import './styles.css';
const App = () => {
    const [image, setImage] = useState(null);
    const [hatPosition, setHatPosition] = useState({ x: 100, y: 40, scale: 1, rotation: 0 });
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        if (!file.type.match('image.*')) {
            alert('Please select an image file');
            return;
        }
        const reader = new FileReader();
        reader.onload = (ev) => setImage(ev.target?.result);
        reader.onerror = () => alert('Error reading file');
        reader.readAsDataURL(file);
    };
    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        if (!canvas)
            return;
        try {
            const link = document.createElement('a');
            link.download = `scumbag-steve-pfp.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
        catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download image');
        }
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Scumbag Steve hat PFP tool" }), _jsxs("div", { className: "container", children: [_jsxs("div", { style: { marginBottom: 16 }, children: [_jsx("input", { type: "file", id: "file-upload", accept: "image/*", onChange: handleImageUpload }), _jsx("label", { htmlFor: "file-upload", children: "Choose File" })] }), _jsxs("div", { style: { marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }, children: [_jsxs("label", { children: ["Size:\u00A0", _jsx("input", { type: "range", min: 0.2, max: 2, step: 0.01, value: hatPosition.scale, onChange: e => setHatPosition(pos => ({ ...pos, scale: Number(e.target.value) })) })] }), _jsxs("label", { children: ["Rotation:\u00A0", _jsx("input", { type: "range", min: -180, max: 180, step: 1, value: hatPosition.rotation, onChange: e => setHatPosition(pos => ({ ...pos, rotation: Number(e.target.value) })) }), _jsxs("span", { children: [hatPosition.rotation, "\u00B0"] })] })] }), _jsx("div", { className: "canvas-container", children: image ? (_jsx(Canvas, { image: image, hat: scumbagHat, hatPosition: hatPosition, setHatPosition: setHatPosition, width: 400, height: 400, "aria-label": "Image editing canvas for Scumbag Steve PFP tool" })) : (_jsx("div", { style: { height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }, "aria-label": "Placeholder canvas area", children: _jsx("p", { children: "Upload an image to start" }) })) }), _jsx("button", { onClick: handleDownload, disabled: !image, children: "Download Scumbag PFP" })] }), _jsx("div", { className: "tip", children: _jsx("p", { children: "Tip: Drag the hat to position it. Use the sliders to resize and rotate." }) })] }));
};
export default App;
