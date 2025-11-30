import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen p-6 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}>
            <h1 className="text-2xl font-bold mb-4">About</h1>
            <div className={`p-5 rounded-xl shadow ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
                <p className="leading-7">
                    This Theme Switcher App is me demonstrating and learning how to use React Context API to manage global state such as Light and Dark mode.
                </p>
            </div>
        </div>
    )
}
