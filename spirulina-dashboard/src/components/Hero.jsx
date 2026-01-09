export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Smart Monitoring for <span>Spirulina Growth</span>
      </h1>
      <p className="hero-subtitle">
        This platform leverages IoT-enabled sensors and live data analytics to continuously track critical growth parameters,<br/>
         enabling data-driven decisions that improve yield quality, stability, and efficiency.
        </p>


      <div className="scroll-wrapper">
        <div className="scroll-track">
          <div className="scroll-card"><img src="/img1.jpg" /></div>
          <div className="scroll-card"><img src="/img2.jpg" /></div>
          <div className="scroll-card"><img src="/img3.jpg" /></div>
          <div className="scroll-card"><img src="/img4.jpg" /></div>

          {/* duplicate for smooth infinite loop */}
          <div className="scroll-card"><img src="/img1.jpg" /></div>
          <div className="scroll-card"><img src="/img2.jpg" /></div>
          <div className="scroll-card"><img src="/img3.jpg" /></div>
          <div className="scroll-card"><img src="/img4.jpg" /></div>
        </div>
      </div>
    </section>
  );
}
