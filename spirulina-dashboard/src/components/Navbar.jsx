import { useNavigate } from "react-router-dom";

export default function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
        className="logo-container"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src="/logo.jpg" alt="SpiraTech Logo" className="logo-img" />
        <span className="logo-text">SpiraTech</span>
      </div>

      <div className="nav-links">
        {/* LIVE DATA */}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/live")}
        >
          {language === "en" ? "Live Data" : "लाइव डेटा"}
        </span>

        <span>{language === "en" ? "Analytics" : "विश्लेषण"}</span>
        <span>{language === "en" ? "About" : "परिचय"}</span>

        {/* 🌙 Dark Mode – CSS restored */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* 🌐 Language – CSS restored */}
        <button
          className="theme-toggle"
          onClick={() =>
            setLanguage(language === "en" ? "hi" : "en")
          }
        >
          {language === "en" ? "हिंदी" : "English"}
        </button>
      </div>
    </nav>
  );
}
