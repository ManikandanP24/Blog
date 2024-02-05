// // ThemeContext.tsx
// import React, { createContext, useContext, useState } from 'react';

// type ThemeContextType = {
//   mode: 'dark' | 'light';
//   toggleMode: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [mode, setMode] = useState<'dark' | 'light'>('dark');

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
//   };

//   const contextValue: ThemeContextType = {
//     mode,
//     toggleMode,
//   };

//   return (
//     <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
