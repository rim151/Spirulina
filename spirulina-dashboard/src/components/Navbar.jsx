export default function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {

  // 🔽 Scroll to Live Data section
  const handleLiveDataClick = () => {
    const liveSection = document.getElementById("live-data");
    if (liveSection) {
      liveSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.jpg" alt="SpiraTech Logo" className="logo-img" />
        <span className="logo-text">SpiraTech</span>
      </div>

      <div className="nav-links">
        {/* ✅ LIVE DATA (SCROLL) */}
        <span
          style={{ cursor: "pointer" }}
          onClick={handleLiveDataClick}
        >
          {language === "en" ? "Live Data" : "लाइव डेटा"}
        </span>

        <span>{language === "en" ? "Analytics" : "विश्लेषण"}</span>
        <span>{language === "en" ? "About" : "परिचय"}</span>

        {/* Dark Mode */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Language Toggle */}
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
