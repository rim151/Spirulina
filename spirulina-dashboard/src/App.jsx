import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import "./index.css";

export default function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Language state
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  // Dashboard access state
  const [goToDashboard, setGoToDashboard] = useState(
    localStorage.getItem("dashboard") === "true"
  );

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Save language
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  // Go to dashboard handler
  const handleGoToDashboard = () => {
    setGoToDashboard(true);
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

      {!goToDashboard ? (
        <LoginScreen
          language={language}
          onGoToDashboard={handleGoToDashboard}
        />
      ) : (
        <>
          <Hero language={language} />
          <Dashboard language={language} />
        </>
      )}
    </>
  );
}

/* ===============================
   LOGIN / GO TO DASHBOARD SCREEN
================================ */
function LoginScreen({ language, onGoToDashboard }) {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">
          {language === "en"
            ? "Smart Spirulina Monitoring System"
            : "स्मार्ट स्पाइरुलिना निगरानी प्रणाली"}
        </h1>

        <p className="login-subtitle">
          {language === "en"
            ? "Click below to access the monitoring dashboard"
            : "डैशबोर्ड खोलने के लिए नीचे क्लिक करें"}
        </p>

        <button className="login-btn" onClick={onGoToDashboard}>
          {language === "en" ? "Go to Dashboard" : "डैशबोर्ड पर जाएं"}
        </button>
      </div>
    </div>
  );
}
