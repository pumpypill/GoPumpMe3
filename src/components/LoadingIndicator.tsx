import React from "react";

const LoadingIndicator: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 16
    }}
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <div
      style={{
        width: 32,
        height: 32,
        border: "4px solid #e0e0e0",
        borderTop: "4px solid #0076ce",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}
      aria-label="Loading"
    />
    <style>
      {`@keyframes spin { 100% { transform: rotate(360deg); } }`}
    </style>
  </div>
);

export default LoadingIndicator;
