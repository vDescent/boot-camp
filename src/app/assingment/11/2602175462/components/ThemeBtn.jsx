"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeBtn(){
    const {theme, toogleTheme} = useTheme();

    return(
        <button onClick={toogleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    )
}