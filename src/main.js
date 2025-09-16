import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './menuAnimations.css'; // Import menu animations
import Header from './components/Header';
import Footer from './components/Footer';
// Error boundary for the root
class RootErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        console.error("Root error:", error); // Log error for debugging
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { padding: 32, color: "#ff4d4f", textAlign: "center" }, children: [_jsx("h2", { children: "Something went wrong." }), _jsx("p", { children: "Try refreshing the page or restarting the app." })] }));
        }
        return this.props.children;
    }
}
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsxs(RootErrorBoundary, { children: [_jsx(Header, {}), _jsx("div", { className: "layout", children: _jsx(App, {}) }), _jsx(Footer, {})] }) }));
