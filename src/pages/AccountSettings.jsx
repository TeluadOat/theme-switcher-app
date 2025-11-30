import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function AccountSettings() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen p-6 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}>
            <h1 id="account-settings-title" className="text-2xl font-bold mb-4">Account Settings</h1>
            <div
                role="form"
                aria-labelledby="account-settings-title"
                className={`max-w-2xl p-5 rounded-xl shadow ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
                <p id="form-description" className="mb-3 text-sm">Manage your account information and personal preferences.</p>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="flex flex-col">
                        <span className="font-semibold">Name</span>
                        <input
                            id="name"
                            type="text"
                            className="px-3 py-2 rounded border border-gray-300 text-gray-800"
                            placeholder="Enter your name"
                            aria-required="true"
                            aria-describedby="form-description" />
                    </label>
                    <label htmlFor="email" className="flex flex-col">
                        <span className="font-semibold">Email</span>
                        <input id="email" type="email" placeholder="Enter your email" className="px-3 py-2 rounded border border-gray-300 text-gray-800" aria-required="true" aria-describedby="form-description" />
                    </label>
                    <button type="submit" className="mt-4 px-4 py-2 w-fit rounded bg-blue-600 text-white hover:bg-blue-700 transition" aria-label="Save account changes">Save Changes</button>
                </div>
            </div>
        </div>
    )
}