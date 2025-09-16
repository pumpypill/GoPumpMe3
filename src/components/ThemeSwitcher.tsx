import React, { useEffect } from "react";

interface ThemeSwitcherProps {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
}

const THEME_KEY = "meme-theme-dark";

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDark, setIsDark }) => {
  // Persist theme preference
  useEffect(() => {
    if (isDark) {
      localStorage.setItem(THEME_KEY, "1");
    } else {
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

  return (
    <div
      className="theme-switcher"
      style={{
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
      }}
    >
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
        <span role="img" aria-label="palette">🎨</span> Theme Switcher
      </h2>
      <p style={{ textAlign: 'center', margin: 0 }}>
        Toggle between light and dark mode to preview your meme site in different themes.
      </p>
      <button
        style={{
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
        }}
        onClick={() => setIsDark(!isDark)}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'none';
        }}
      >
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
