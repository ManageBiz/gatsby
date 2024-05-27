import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeProvider>{element}</ThemeProvider>
);