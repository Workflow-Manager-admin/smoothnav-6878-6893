// PUBLIC_INTERFACE
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage theme toggling between light and dark modes
 * @param {string} defaultTheme - The default theme to use ('light' or 'dark')
 * @returns {Object} - Object containing the current theme and toggle function
 */
export const useThemeToggle = (defaultTheme = 'dark') => {
  const [theme, setTheme] = useState(defaultTheme);
  
  // Initialize theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('smoothnav-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme(defaultTheme);
    }
  }, [defaultTheme]);

  // Apply theme to document body
  const applyTheme = (newTheme) => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${newTheme}`);
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('smoothnav-theme', newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
};
