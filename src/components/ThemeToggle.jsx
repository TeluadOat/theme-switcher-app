import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { MoonIcon } from '@heroicons/react/16/solid';
import { SunIcon } from "@heroicons/react/16/solid";

export default function ThemeToggle() {
    const { theme, toggleLightTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <div className={`toggle-bar rounded w-fit ${theme === "light" ? "bg-gray-200" : "bg-black"}`} >
            <button onClick={toggleLightTheme} className={`px-4 py-2 rounded transition-colors ${theme === "light" ? "bg-gray-400 text-gray-700 outline outline-black" : "bg-black text-gray-500"}`}>
                <SunIcon className="h-8 w-8 mr-2" />Light
            </button>
            <button onClick={toggleDarkTheme} className={`px-4 py-2 rounded transition-colors ml-4 ${theme === "light" ? "bg-gray-200 text-gray-700" : "bg-gray-800 text-gray-500 outline outline-white"}`}>
                <MoonIcon className="h-8 w-8 mr-2" />Dark
            </button>
        </div >
    );
};