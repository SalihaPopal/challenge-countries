import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const lightTheme = {
  body: '#ffffff',
  text: '#333333',
};

const darkTheme = {
  body: '#1a1a1a',
  text: '#ffffff',
};

const ThemeWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
      <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
