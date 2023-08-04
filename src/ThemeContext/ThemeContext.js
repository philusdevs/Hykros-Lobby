import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const storedDarkMode = localStorage.getItem("darkMode");
      return storedDarkMode ? JSON.parse(storedDarkMode) : true;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return true;
    }
  });

  useEffect(() => {
    setIsLoaded(true); // Mark the initial load as complete after the first render
  }, []);

  useEffect(() => {
    // After the initial load and when dark mode changes, save to localStorage
    if (isLoaded) {
      try {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }
  }, [darkMode, isLoaded]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
