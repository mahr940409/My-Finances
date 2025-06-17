import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <header className="flex justify-end space-x-2 mb-4">
        <LanguageSelector />
        <ThemeToggle />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-4 text-center text-sm">
        Developer MAHR94
      </footer>
    </div>
  );
};
