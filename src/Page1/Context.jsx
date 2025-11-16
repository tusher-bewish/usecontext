// import { createContext, useContext, useState } from "react";

// // 1. Context তৈরি
// export const ThemeContext = createContext(null);

// // 2. Custom Hook
// export const useTheme = () => useContext(ThemeContext);

// // 3. Provider Component
// export const ThemeProvider = ({ children }) => {
  
//   const [theme, setTheme] = useState("light");

//   const handleCurrentTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         handleCurrentTheme
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

// Custom hook
export const useTheme = () => useContext(ThemeContext);

// Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleCurrentTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
