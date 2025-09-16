import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
// Import assets directly to avoid potential path issues
import logo from '../assets/example.png';
import logoDark from '../assets/example_dark.png';
import socialMediaIcon from '../assets/social-media.png';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    // Handle clicks outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen &&
                menuRef.current &&
                hamburgerRef.current &&
                !menuRef.current.contains(event.target) &&
                !hamburgerRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);
    // Detect dark mode
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains('dark'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        setIsDark(document.body.classList.contains('dark'));
        return () => observer.disconnect();
    }, []);
    return (_jsxs("header", { className: "header", children: [_jsxs("div", { className: "header-left", children: [_jsx("a", { href: "/", "aria-label": "Go to homepage", className: "logo-link", children: _jsx("img", { src: isDark ? logoDark : logo, alt: "GoPumpMe Logo", className: "logo-image" }) }), _jsx("div", { className: "desktop-menu", children: _jsxs("ul", { className: "desktop-menu-items", children: [_jsx("li", { children: _jsx("a", { href: "/", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#about", children: "About" }) }), _jsx("li", { children: _jsx("a", { href: "#how-it-works", children: "How It Works" }) }), _jsx("li", { children: _jsx("a", { href: "#donations", children: "Donations" }) }), _jsx("li", { children: _jsx("a", { href: "https://x.com/i/communities/1963018723624898836", target: "_blank", rel: "noopener noreferrer", children: "Community" }) })] }) })] }), _jsxs("div", { className: "header-right", children: [_jsx("a", { href: "https://www.axiom.com/trade", target: "_blank", rel: "noopener noreferrer", className: "trade-button", children: "Trade on Axiom" }), _jsx("a", { href: "https://twitter.com/yourhandle", target: "_blank", rel: "noopener noreferrer", className: "social-icon-link", children: _jsx("img", { src: socialMediaIcon, alt: "Social Media", className: "social-icon" }) })] }), _jsxs("button", { className: `hamburger ${menuOpen ? 'active' : ''}`, "aria-label": menuOpen ? "Close menu" : "Open menu", "aria-expanded": menuOpen, "aria-controls": "mobile-menu", onClick: () => setMenuOpen((open) => !open), ref: hamburgerRef, children: [_jsx("span", { className: "hamburger-line" }), _jsx("span", { className: "hamburger-line" }), _jsx("span", { className: "hamburger-line" })] }), _jsx("nav", { ref: menuRef, className: `mobile-menu${menuOpen ? " open" : ""}`, id: "mobile-menu", "aria-hidden": !menuOpen, children: _jsxs("ul", { className: "mobile-menu-items", children: [_jsx("li", { children: _jsx("a", { href: "/", onClick: () => setMenuOpen(false), children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#about", onClick: () => setMenuOpen(false), children: "About" }) }), _jsx("li", { children: _jsx("a", { href: "#how-it-works", onClick: () => setMenuOpen(false), children: "How It Works" }) }), _jsx("li", { children: _jsx("a", { href: "#donations", onClick: () => setMenuOpen(false), children: "Donations" }) }), _jsx("li", { children: _jsx("a", { href: "https://x.com/i/communities/1963018723624898836", target: "_blank", rel: "noopener noreferrer", onClick: () => setMenuOpen(false), children: "Community" }) })] }) })] }));
};
export default Header;
