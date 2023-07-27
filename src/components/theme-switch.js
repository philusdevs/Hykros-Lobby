// ThemeSwitchButton.js
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext/ThemeContext'; // Adjust the path based on your folder structure

const ThemeSwitchButton = () => {
  const { darkMode, toggleTheme } = useTheme(); // Use the hook to get the theme mode and toggle function

  return (
    <StyledThemeSwitch>
      <DarkModeSwitch checked={darkMode} size={20} onChange={toggleTheme} /> {/* Use the theme mode and toggle function */}
    </StyledThemeSwitch>
  );
};

export default ThemeSwitchButton;

const StyledThemeSwitch = styled.div`
  display: flex;
`;