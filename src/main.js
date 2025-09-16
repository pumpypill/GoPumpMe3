import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './menuAnimations.css';
import Header from './components/Header';
import Footer from './components/Footer';
// Error boundary for the root
class RootErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        console.error("Root error:", error);
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { padding: 32, color: "#ff4d4f", textAlign: "center" }, children: [_jsx("h2", { children: "Something went wrong." }), _jsx("p", { children: "Try refreshing the page or restarting the app." })] }));
        }
        return this.props.children;
    }
}
// Create root element and render app
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
ReactDOM.createRoot(rootElement).render(_jsx(React.StrictMode, { children: _jsxs(RootErrorBoundary, { children: [_jsx(Header, {}), _jsx("div", { className: "layout", children: _jsx(App, {}) }), _jsx(Footer, {})] }) }));
