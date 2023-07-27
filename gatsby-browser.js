
import React from 'react';
import { ThemeProvider } from './src/ThemeContext/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

require('./src/components/prism-coldark-dark.css');