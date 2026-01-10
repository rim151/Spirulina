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

{/* ⚙️ SETTINGS DROPDOWN */}
<div className="settings">
  <span className="settings-btn">
    {language === "en" ? "Settings" : "सेटिंग्स"} ⚙️
  </span>

  <div className="settings-dropdown">
    {/* Dark Mode */}
    <div
      className="settings-option"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span>🌙 Dark Mode</span>
      <span>{darkMode ? "On" : "Off"}</span>
    </div>

    {/* Language */}
    <div className="settings-option">
      <span>🌐 Language</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  </div>
</div>
      </div>
    </nav>
  );
}
