export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">
          Spira<span>Tech</span>
        </h3>

        <p className="footer-desc">
          {language === "en"
            ? "An AI & IoT based smart monitoring system for sustainable spirulina cultivation."
            : "स्पाइरुलिना की सतत खेती के लिए एक AI और IoT आधारित स्मार्ट निगरानी प्रणाली।"}
        </p>

        <div className="footer-links">
          <span>{language === "en" ? "Live Data" : "लाइव डेटा"}</span>
          <span>{language === "en" ? "Analytics" : "विश्लेषण"}</span>
          <span>{language === "en" ? "About Project" : "परियोजना के बारे में"}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SpiraTech •{" "}
          {language === "en"
            ? "All rights reserved"
            : "सर्वाधिकार सुरक्षित"}
        </p>
      </div>
    </footer>
  );
}
