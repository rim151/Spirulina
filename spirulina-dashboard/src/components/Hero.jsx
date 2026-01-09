export default function Hero({ language }) {
  return (
    <section className="hero">
      <h1 className="hero-title">
        {language === "en" ? (
          <>
            Smart Monitoring for <span>Spirulina Growth</span>
          </>
        ) : (
          <>
            <span>स्पाइरुलिना</span> वृद्धि के लिए स्मार्ट निगरानी
          </>
        )}
      </h1>

      <p className="hero-subtitle">
        {language === "en" ? (
          <>
            This platform leverages IoT-enabled sensors and live data analytics to
            continuously track critical growth parameters,
            <br />
            enabling data-driven decisions that improve yield quality, stability,
            and efficiency.
          </>
        ) : (
          <>
            यह प्लेटफ़ॉर्म IoT-सक्षम सेंसर और लाइव डेटा एनालिटिक्स का उपयोग
            करता है ताकि महत्वपूर्ण विकास मापदंडों की निरंतर निगरानी की जा सके,
            <br />
            जिससे उत्पादन की गुणवत्ता, स्थिरता और दक्षता में सुधार के लिए
            डेटा-आधारित निर्णय लिए जा सकें।
          </>
        )}
      </p>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          <div className="scroll-card"><img src="/img1.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img2.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img3.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img4.jpg" alt="" /></div>

          {/* duplicate for smooth infinite loop */}
          <div className="scroll-card"><img src="/img1.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img2.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img3.jpg" alt="" /></div>
          <div className="scroll-card"><img src="/img4.jpg" alt="" /></div>
        </div>
      </div>
    </section>
  );
}
