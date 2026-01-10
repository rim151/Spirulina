export default function Hero({ language }) {
  return (
    <>
      {/* ===== HERO SECTION (UNCHANGED) ===== */}
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
              This platform leverages IoT-enabled sensors and live data analytics
              to continuously track critical growth parameters,
              <br />
              enabling data-driven decisions that improve yield quality,
              stability, and efficiency.
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

            <div className="scroll-card"><img src="/img1.jpg" alt="" /></div>
            <div className="scroll-card"><img src="/img2.jpg" alt="" /></div>
            <div className="scroll-card"><img src="/img3.jpg" alt="" /></div>
            <div className="scroll-card"><img src="/img4.jpg" alt="" /></div>
          </div>
        </div>
      </section>

      {/* ===== NEW SPIRULINA INFO SECTION (ADDED) ===== */}
      <section className="spirulina-info">
        <h2 className="info-title">
          {language === "en" ? (
            <>
              What is <span>Spirulina</span>?
            </>
          ) : (
            <>
              <span>स्पाइरुलिना</span> क्या है?
            </>
          )}
        </h2>

        <p className="info-description">
  {language === "en" ? (
    <>
      Spirulina is a nutrient-rich blue-green microalgae that has been consumed
      for centuries due to its exceptional nutritional value. It grows naturally
      in alkaline water and requires minimal resources, making it an
      environmentally sustainable food source.
      <br /><br />
      It contains a high concentration of complete proteins, essential amino
      acids, vitamins such as B-complex, iron, calcium, and powerful antioxidants
      like phycocyanin. These nutrients help strengthen the immune system, improve
      metabolism, and protect the body from oxidative stress.
      <br /><br />
      Due to its detoxifying properties, spirulina helps remove harmful toxins
      and heavy metals from the body. Its role in improving overall health has
      made it widely used in dietary supplements, health foods, and medical
      research worldwide.
    </>
  ) : (
    <>
      स्पाइरुलिना एक अत्यधिक पोषक तत्वों से भरपूर नीली-हरी सूक्ष्म शैवाल है,
      जिसका उपयोग सदियों से इसके स्वास्थ्य लाभों के लिए किया जाता रहा है।
      यह क्षारीय जल में प्राकृतिक रूप से उगती है और कम संसाधनों में विकसित
      हो सकती है, जिससे यह एक पर्यावरण-अनुकूल खाद्य स्रोत बनती है।
      <br /><br />
      इसमें उच्च मात्रा में संपूर्ण प्रोटीन, आवश्यक अमीनो एसिड,
      बी-कॉम्प्लेक्स विटामिन, आयरन, कैल्शियम और शक्तिशाली एंटीऑक्सीडेंट
      पाए जाते हैं, जो शरीर की रोग प्रतिरोधक क्षमता को बढ़ाते हैं।
      <br /><br />
      स्पाइरुलिना शरीर से विषैले तत्वों और भारी धातुओं को बाहर निकालने
      में सहायक होती है, इसलिए इसका उपयोग स्वास्थ्य पूरक और चिकित्सा
      अनुसंधान में व्यापक रूप से किया जाता है।
    </>
  )}
</p>


        <div className="benefits-grid">
  {language === "en" ? (
    <>
      <div className="benefit-card">💪 High Protein Content</div>
      <div className="benefit-card">🛡 Boosts Immunity</div>
      <div className="benefit-card">❤️ Improves Heart Health</div>
      <div className="benefit-card">🧠 Enhances Brain Function</div>
      
    </>
  ) : (
    <>
      <div className="benefit-card">💪 उच्च प्रोटीन</div>
      <div className="benefit-card">🛡 रोग प्रतिरोधक क्षमता बढ़ाता है</div>
      <div className="benefit-card">❤️ हृदय स्वास्थ्य में सुधार</div>
      <div className="benefit-card">🧠 मस्तिष्क कार्य में सुधार</div>
      
    </>
  )}
</div>

      </section>
    </>
  );
}
