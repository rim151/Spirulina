import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import SensorCard from "./components/SensorCard";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  const [loading, setLoading] = useState(false);

  // 🔑 ThingSpeak Config
  const CHANNEL_ID = "3224307";
  const READ_API_KEY = "XI1DDMZKFM76IK35";

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

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
      localStorage.setItem("auth", "true");
    }, 1500);
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
    

      {!authenticated ? (
        <LoginScreen
          language={language}
          loading={loading}
          onLogin={handleLogin}
        />
      ) : (
        <>
          <Hero language={language} />
          <Dashboard language={language} />

          {/* 🔴 ThingSpeak Sensor Cards Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              padding: "10px",
            }}
          >
            <SensorCard
              title="Temperature"
              icon="🌡️"
              unit="°C"
              channelId={CHANNEL_ID}
              fieldNumber={1}
              readApiKey={READ_API_KEY}
            />

            <SensorCard
              title="Humidity"
              icon="💧"
              unit="%"
              channelId={CHANNEL_ID}
              fieldNumber={2}
              readApiKey={READ_API_KEY}
            />

            <SensorCard
              title="Light Intensity"
              icon="💡"
              channelId={CHANNEL_ID}
              fieldNumber={3}
              readApiKey={READ_API_KEY}
            />

            <SensorCard
              title="Odour Level"
              icon="👃"
              channelId={CHANNEL_ID}
              fieldNumber={4}
              readApiKey={READ_API_KEY}
            />
          </div>
        </>
      )}
    </>
  );
}

/* ===============================
   LOGIN SCREEN
================================ */
function LoginScreen({ language, loading, onLogin }) {
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
            ? "Monitor real-time growth parameters using IoT and AI analytics"
            : "IoT और AI एनालिटिक्स के माध्यम से रियल-टाइम निगरानी"}
        </p>

        <button className="login-btn" onClick={onLogin} disabled={loading}>
          {loading ? (
            <span className="loader"></span>
          ) : language === "en" ? (
            "Login to Dashboard"
          ) : (
            "डैशबोर्ड में लॉगिन करें"
          )}
        </button>
      </div>
    </div>
  );
}
