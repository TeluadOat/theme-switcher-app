import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import Others from "../components/Others.jsx";

export default function Home() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`min-h-screen p-5 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
            <h1 className={`text-base font-bold mb-3 ${theme === "light" ? "" : "text-gray-300"}`}>Theme</h1>
            <ThemeToggle />
            <Others />
        </div>
    )
}