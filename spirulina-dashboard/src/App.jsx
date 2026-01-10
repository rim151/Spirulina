import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  // 🔥 LOGIN REMOVED → always logged in
  const isLoggedIn = true;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
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

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero language={language} />
              <Footer language={language} />
            </>
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/live"
          element={<Dashboard language={language} />}
        />

        {/* ANALYTICS */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
}
