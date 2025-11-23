import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`px-4 py-2 rounded transition-colors ${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};