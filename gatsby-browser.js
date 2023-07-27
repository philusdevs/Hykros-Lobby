import React from 'react';
import { ThemeProvider } from './src/ThemeContext/ThemeContext';

import './src/components/prism-coldark-dark.css'; // Move the import inside gatsby-browser.js

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
