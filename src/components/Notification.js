import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const Notification = ({ message, onClose, type = "info", duration = 1800 }) => {
    useEffect(() => {
        if (!message)
            return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [message, onClose, duration]);
    if (!message)
        return null;
    return (_jsx("div", { style: {
            position: "fixed",
            left: "50%",
            bottom: 32,
            transform: "translateX(-50%)",
            background: type === "error"
                ? "#ff4d4f"
                : type === "success"
                    ? "#52c41a"
                    : "#333",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: 6,
            boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
            zIndex: 1000,
            fontWeight: 500,
            fontSize: 16,
            minWidth: 180,
            textAlign: "center",
            transition: "opacity 0.2s",
            border: `2px solid ${type === "error" ? "#ff4d4f" : type === "success" ? "#52c41a" : "#333"}` // Add border for consistency
        }, role: "status", "aria-live": "polite", onClick: onClose, tabIndex: 0, children: message }));
};
export default Notification;
