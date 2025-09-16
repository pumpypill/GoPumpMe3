import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import './styles.css';
const AboutSection = () => (_jsxs("section", { id: "about", className: "container", style: { textAlign: 'left' }, children: [_jsx("h2", { children: "About GoPumpMe" }), _jsx("p", { children: "GoPumpMe is a unique token dedicated to making a real-world impact. We donate pump.fun creator rewards directly to GoFundMe campaigns, helping those in need while building a strong, positive community." }), _jsxs("ul", { style: { display: 'block', margin: '16px 0' }, children: [_jsx("li", { children: "Creator rewards are donated to verified GoFundMe causes" }), _jsx("li", { children: "Transparent donations and community-driven selection" }), _jsx("li", { children: "Join us to pump for good!" })] }), _jsx("a", { href: "#how-it-works", className: "cta-btn", children: "How It Works" })] }));
const ThemeSwitcher = ({ isDark, setIsDark }) => (_jsxs("div", { className: "theme-switcher", style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        padding: 16,
        maxWidth: '100%',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: 8,
        background: isDark ? '#23272f' : '#f5f7fa',
    }, children: [_jsx("h2", { style: { margin: 0 }, children: "Theme Switcher" }), _jsx("p", { style: { textAlign: 'center', margin: 0 }, children: "View GoPumpMe in light or dark mode." }), _jsx("button", { style: {
                width: 'fit-content',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 500,
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                background: isDark
                    ? 'linear-gradient(90deg, #4caf1b 60%, #6dd400 100%)'
                    : 'linear-gradient(90deg, #6dd400 60%, #4caf1b 100%)',
                color: '#fff',
                transition: 'background 0.2s, transform 0.2s',
            }, onClick: () => setIsDark(!isDark), onMouseEnter: e => { e.currentTarget.style.transform = 'scale(1.05)'; }, onMouseLeave: e => { e.currentTarget.style.transform = 'none'; }, children: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' })] }));
class AppErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        console.error("App error:", error);
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { padding: 32, color: "#ff4d4f", textAlign: "center" }, children: [_jsx("h2", { children: "Something went wrong." }), _jsx("p", { children: "Try refreshing the page or restarting the app." })] }));
        }
        return this.props.children;
    }
}
const App = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);
    return (_jsx(AppErrorBoundary, { children: _jsxs("div", { children: [_jsxs("section", { style: {
                        width: '100%',
                        maxWidth: 900,
                        margin: '0 auto 40px auto',
                        padding: '48px 24px 56px 24px',
                        borderRadius: 16,
                        background: 'linear-gradient(120deg, #fafdff 60%, #f0fff0 100%)',
                        boxShadow: '0 8px 48px 0 rgba(76,175,27,0.10), 0 1.5px 0 0 #e5e9f2',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }, children: [_jsx("div", { style: {
                                position: 'absolute',
                                top: -80,
                                left: -80,
                                width: 260,
                                height: 260,
                                background: 'radial-gradient(circle at 60% 40%, #4caf1b22 0%, #fafdff00 80%)',
                                zIndex: 0,
                                borderRadius: '50%',
                                pointerEvents: 'none',
                            } }), _jsx("div", { style: {
                                position: 'absolute',
                                bottom: -60,
                                right: -60,
                                width: 180,
                                height: 180,
                                background: 'radial-gradient(circle at 40% 60%, #6dd40022 0%, #fafdff00 80%)',
                                zIndex: 0,
                                borderRadius: '50%',
                                pointerEvents: 'none',
                            } }), _jsxs("div", { style: { position: 'relative', zIndex: 1, width: '100%' }, children: [_jsx("div", { style: {
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        color: 'var(--secondary-green, #388e13)',
                                        letterSpacing: 1,
                                        marginBottom: 12,
                                        textTransform: 'uppercase'
                                    }, children: "GoPumpMe" }), _jsxs("h1", { style: {
                                        fontSize: '2.8rem',
                                        fontWeight: 800,
                                        margin: '0 0 18px 0',
                                        lineHeight: 1.13,
                                        color: '#222'
                                    }, children: ["Pump for Good.", _jsx("br", {}), _jsx("span", { style: {
                                                background: 'linear-gradient(90deg, #4caf1b 60%, #6dd400 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                display: 'inline-block'
                                            }, children: "GoFundMe Meets Pump" })] }), _jsx("p", { style: {
                                        fontSize: '1.25rem',
                                        color: '#555',
                                        maxWidth: 540,
                                        margin: '0 auto 32px auto',
                                        fontWeight: 400,
                                        lineHeight: 1.6
                                    }, children: "The first token that channels pump.fun creator rewards to real GoFundMe campaigns. Join the movement to make every trade count for a cause!" }), _jsx("a", { href: "#about", style: {
                                        display: 'inline-block',
                                        background: 'linear-gradient(90deg, #4caf1b 60%, #6dd400 100%)',
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: '1.15rem',
                                        padding: '14px 38px',
                                        borderRadius: 32,
                                        boxShadow: '0 4px 24px 0 rgba(76,175,27,0.13)',
                                        textDecoration: 'none',
                                        transition: 'background 0.18s, box-shadow 0.18s, transform 0.13s',
                                        marginTop: 8,
                                        marginBottom: 0,
                                        letterSpacing: 0.01,
                                    }, onMouseEnter: e => {
                                        e.currentTarget.style.background =
                                            'linear-gradient(90deg, #6dd400 40%, #4caf1b 100%)';
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                    }, onMouseLeave: e => {
                                        e.currentTarget.style.background =
                                            'linear-gradient(90deg, #4caf1b 60%, #6dd400 100%)';
                                        e.currentTarget.style.transform = 'none';
                                    }, children: "Learn More" })] })] }), _jsx(AboutSection, {}), _jsxs("div", { className: "container", id: "how-it-works", children: [_jsx("h2", { children: "How It Works" }), _jsx("p", { children: "As GoPumpMe trading volume generates fees and creator rewards are earned, we donate them to GoFundMe campaigns chosen by the community. Every trade helps someone in need!" })] }), _jsx(ThemeSwitcher, { isDark: isDark, setIsDark: setIsDark })] }) }));
};
export default App;
