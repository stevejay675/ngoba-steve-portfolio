'use client';

import { useContext, createContext, useState, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [themeMode, setThemeMode] = useState("light");
  const [isInitialised, setIsInitialised] = useState(false);

  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setThemeMode(initialTheme);
    document.documentElement.classList.toggle("dark-theme", initialTheme === "dark")
    setIsInitialised(true);
  }, [])


  const changeTheme = (theme) =>{
    setThemeMode(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
  }

  if(!isInitialised) return null;

  return(
    <themeContext.Provider
      value={{
        themeMode,
        isDarkMode: themeMode === "dark",
        changeTheme,
      }}
    >
        {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext)