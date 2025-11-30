import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Legal() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen p-6 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"} `}>
            <h1 className="text-2xl font-bold mb-4">Legal</h1>
            <div className={`p-5 rounded-xl shadow ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
                <p className="leading-7 mb-3">This is for learning and educational purposes. All features and content are intended for demonstration only.</p>
                <p className="text-sm opacity-75">© {new Date().getFullYear()} TeluadOat. All rights reserved</p>
            </div>
        </div>

    )
}
