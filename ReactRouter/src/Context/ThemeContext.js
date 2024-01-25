import React, { createContext, useContext, } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  DarkMode: () => {},
  LightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
