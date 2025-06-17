import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="border px-2 py-1 ml-2">
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};
