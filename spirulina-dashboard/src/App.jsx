import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <Hero language={language} />
      <Dashboard language={language} />
    </>
  );
}
