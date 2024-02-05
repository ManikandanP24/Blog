// ThemeProvider.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextProps = {
  mode: 'dark' | 'light';
  // toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({mode: 'dark'});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const toggleMode = () => {
    // console.log('Mode before:', mode);
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    // console.log('Mode after:', mode);

  };

  return (
    <ThemeContext.Provider value={{ mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
// console.log('useTheme',useTheme)
