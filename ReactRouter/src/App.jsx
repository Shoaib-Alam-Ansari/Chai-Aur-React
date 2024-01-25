import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const DarkMode = () => {
    setThemeMode("dark");
  };
  const LightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute('data-bs-theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, DarkMode, LightMode }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
