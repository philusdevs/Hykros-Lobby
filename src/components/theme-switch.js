import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext/ThemeContext';

const ThemeSwitchButton = () => {
  const { darkMode, setDarkMode } = useTheme();

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => {
      // Toggle the dark mode state
      const newDarkMode = !prevDarkMode;

      // Save the updated dark mode state to localStorage (optional, if you use it)
      localStorage.setItem('darkMode', newDarkMode);

      // Refresh the page after the dark mode state is updated
      window.location.reload();

      return newDarkMode;
    });
  };

  return (
    <StyledThemeSwitch>
      <DarkModeSwitch checked={darkMode} onChange={handleThemeToggle} size={20} />
    </StyledThemeSwitch>
  );
};

export default ThemeSwitchButton;

const StyledThemeSwitch = styled.div`
  display: flex;
`;
