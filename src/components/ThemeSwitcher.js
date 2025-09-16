import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
const THEME_KEY = "meme-theme-dark";
const ThemeSwitcher = ({ isDark, setIsDark }) => {
    // Persist theme preference
    useEffect(() => {
        if (isDark) {
            localStorage.setItem(THEME_KEY, "1");
        }
        else {
            localStorage.removeItem(THEME_KEY);
        }
    }, [isDark]);
    // On mount, restore theme preference
    React.useEffect(() => {
        if (localStorage.getItem(THEME_KEY) === "1") {
            setIsDark(true);
        }
        // eslint-disable-next-line
    }, []);
    return (_jsxs("div", { className: "theme-switcher", style: {
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
        }, children: [_jsxs("h2", { style: { display: 'flex', alignItems: 'center', gap: 8, margin: 0 }, children: [_jsx("span", { role: "img", "aria-label": "palette", children: "\uD83C\uDFA8" }), " Theme Switcher"] }), _jsx("p", { style: { textAlign: 'center', margin: 0 }, children: "Toggle between light and dark mode to preview your meme site in different themes." }), _jsx("button", { style: {
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
                }, onClick: () => setIsDark(!isDark), onMouseEnter: (e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                }, onMouseLeave: (e) => {
                    e.currentTarget.style.transform = 'none';
                }, children: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' })] }));
};
export default ThemeSwitcher;
