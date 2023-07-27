import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Fetch the theme mode from persisted storage (e.g., localStorage) and set the initial state
    const savedThemeMode = localStorage.getItem('darkMode');
    setDarkMode(savedThemeMode === 'true');
  }, []);

  const toggleTheme = () => {
    // Toggle the theme mode and save the updated state to persisted storage
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
