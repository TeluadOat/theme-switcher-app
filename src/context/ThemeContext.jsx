import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    //toggle function
    const toggleLightTheme = () => {
        setTheme("light")
    };

    const toggleDarkTheme = () => {
        setTheme("dark");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext value={{ theme, toggleLightTheme, toggleDarkTheme }}>
            {children}
        </ThemeContext>
    )
}; 