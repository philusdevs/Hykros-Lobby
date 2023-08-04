import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext/ThemeContext';

const ThemeSwitchButton = () => {
  const { darkMode, setDarkMode } = useTheme();

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    window.location.reload(); // Refresh the page after the dark mode state is updated
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
