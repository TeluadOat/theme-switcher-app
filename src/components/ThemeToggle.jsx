import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
    const { theme, toggleLightTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <div className={`flex max-w-sm items-center justify-around rounded-xl gap-1 p-1 transition-colors ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}`} >
            <button onClick={toggleLightTheme} className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-medium transition-all ${theme === "light" ? "bg-white text-gray-900 shadow" : "text-gray-300 hover:bg-gray-700"}`}>
                <SunIcon className="h-6 w-6" />Light
            </button>
            <button onClick={toggleDarkTheme} className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-medium transition-all ${theme === "light" ? "text-gray-700 hover:bg-gray-300" : "bg-gray-900 text-white shadow"}`}>
                <MoonIcon className="h-6 w-6" />Dark
            </button>
        </div >
    );
};