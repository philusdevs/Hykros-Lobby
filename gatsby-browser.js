import React from 'react';
import { ThemeProvider } from './src/ThemeContext/ThemeContext';
import './src/components/prism-coldark-dark.css'; 

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
