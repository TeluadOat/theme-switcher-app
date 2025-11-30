import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Support() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen p-6 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}>
            <h1 className="text-2xl font-bold mb-4">Support</h1>
            <div className={`p-5 rounded-xl shadow ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
                <p className="mb-3">Need help or want to help us improve? Contact our support team.</p>
                <address>
                    <p>Email: <a className="text-blue-700 hover:text-blue-900 font-normal" href="mailto:olubodunadeola2000@gmail.com">olubodunadeola2000@gmail.com</a> </p>
                    <p>Phone: <a className="text-blue-700 hover:text-blue-900 font-normal" href="tel: +2348150344826">+234 815 034 4826</a> </p>
                </address>
            </div >
        </div >
    )
}
