import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const {
        root,
        ...others
    } = props
    const initTheme = localStorage.getItem("theme") || "light"
    root.setAttribute("data-theme", initTheme);
    const [theme, setTheme] =  useState(initTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {others.children}
        </ThemeContext.Provider>
    );
};
