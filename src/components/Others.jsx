import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";

import {
    Cog6ToothIcon,
    ChatBubbleLeftRightIcon,
    InformationCircleIcon,
    LifebuoyIcon,
    ScaleIcon
} from "@heroicons/react/24/outline";

export default function Others() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const items = [
        { label: "Account Settings", icon: Cog6ToothIcon, to: "/settings" },
        { label: "Give Feedback", icon: ChatBubbleLeftRightIcon, to: "/feedback" },
        { label: "About", icon: InformationCircleIcon, to: "/about" },
        { label: "Support", icon: LifebuoyIcon, to: "/support" },
        { label: "Legal", icon: ScaleIcon, to: "/legal" },
    ];

    return (
        <div className="mt-6 w-full max-w-sm">
            <div className={`flex flex-col rounded-xl shadow-sm border transition-colors overflow-hidden ${theme === "light" ? "bg-white border-gray-300" : "bg-gray-800 border-gray-700"}`}>
                {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button key={index} onClick={() => navigate(item.to)} className={`flex items-center gap-3 px-5 py-4 text-left transition-all ${theme === "light" ? "hover:bg-gray-100 text-gray-800" : "hover:bg-gray-700 text-gray-200"}`}>
                            <Icon className="h-6 w-6" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </div >
    )
}