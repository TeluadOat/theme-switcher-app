import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Others() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`flex flex-col gap-4 mt-5`} >
            < span > Account settings</ span>
            <span>Give feedback</span>
            <span>About</span>
            <span>Support</span>
            <span>Legal</span>
        </div>
    )
}