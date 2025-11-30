import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Feedback() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`min-h-screen max-w-2xl p-6 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}>
            <h1 id="feedback-title" className="text-2xl font-bold mb-4">Give Feedback</h1>
            <div role="form" aria-labelledby="feedback-title" className={`p-5 rounded-xl shadow ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
                <p id="form-description" className="mb-3 text-sm">We'd love to hear your thoughts about this app</p>
                <textarea name="feedback" aria-describedby="form-description" className="w-full h-32 p-3 rounded border border-gray-300" placeholder="Write your feedback..." id=""></textarea>
                <button type="submit" aria-label="Submit app feedback" className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Submit Feedback</button>
            </div>
        </div>
    )
}
