import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {
  const navigate = useNavigate();
  const [openSettings, setOpenSettings] = useState(false);

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
        <span onClick={() => navigate("/live")} style={{ cursor: "pointer" }}>
          {language === "en" ? "Live Data" : "लाइव डेटा"}
        </span>

        <span>{language === "en" ? "Analytics" : "विश्लेषण"}</span>

        {/* ⚙️ SETTINGS */}
        <div className="settings-wrapper">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setOpenSettings(!openSettings)}
          >
            {language === "en" ? "Settings" : "सेटिंग्स"}
          </span>

          {openSettings && (
            <div className="settings-dropdown">
              <div
                className="settings-item"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </div>

              <div
                className="settings-item"
                onClick={() =>
                  setLanguage(language === "en" ? "hi" : "en")
                }
              >
                {language === "en" ? "🌐 हिंदी" : "🌐 English"}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
