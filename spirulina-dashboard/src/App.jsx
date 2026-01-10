import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
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

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("dashboard") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("dashboard", "true");
  };

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
            isLoggedIn ? (
              <Hero language={language} />
            ) : (
              <LoginScreen language={language} onLogin={handleLogin} />
            )
          }
        />

        {/* LIVE DATA PAGE */}
        <Route
          path="/live"
          element={
            isLoggedIn ? (
              <Dashboard language={language} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </>
  );
}
