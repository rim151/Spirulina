import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import SensorCard from "../components/SensorCard";

export default function Dashboard({ language }) {
  const [data, setData] = useState(null);

  // 🔴 ESP32-CAM STREAM URL (yahin apna original URL daalo)
  const CAMERA_URL = "http://192.168.1.105:81/stream";

  useEffect(() => {
    const r = ref(db, "sensors");
    onValue(r, (snap) => {
      setData(snap.val());
    });
  }, []);

  if (!data) return <p className="loading">Loading live data...</p>;

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        {/* 🔹 TITLE */}
        <h1 className="dashboard-title">
          {language === "en"
            ? "Live Monitoring Dashboard"
            : "लाइव निगरानी डैशबोर्ड"}
        </h1>

        {/* 🔹 STATUS */}
        <div className="status-row">
          <span className="status-dot"></span>
          <span>
            {language === "en"
              ? "System Online · Real-time Firebase Sync"
              : "सिस्टम ऑनलाइन · रियल-टाइम फायरबेस सिंक"}
          </span>
        </div>

        {/* 🔹 LIVE SENSOR DATA */}
        <div className="grid">
          <SensorCard
            title={language === "en" ? "Temperature" : "तापमान"}
            value={data.temperature}
            unit="°C"
            icon="🌡"
          />
          <SensorCard
            title={language === "en" ? "Humidity" : "आर्द्रता"}
            value={data.humidity}
            unit="%"
            icon="💧"
          />
          <SensorCard
            title={language === "en" ? "Light Intensity" : "प्रकाश तीव्रता"}
            value={data.light}
            unit="lux"
            icon="💡"
          />
          <SensorCard
            title={language === "en" ? "Air Quality" : "वायु गुणवत्ता"}
            value={data.airQuality}
            unit=""
            icon="🌫"
          />
        </div>

        {/* 🎥 CAMERA SECTION (LIVE DATA KE NICHE) */}
        <div className="camera-section">
          <div className="camera-header">
            <h2 className="camera-title">
              {language === "en" ? "Live Camera Feed" : "लाइव कैमरा फ़ीड"}
            </h2>

            <span className="camera-live">
              <span className="live-dot"></span>
              LIVE
            </span>
          </div>

          <div className="camera-card">
            <img
              src={CAMERA_URL}
              alt="ESP32 Camera Live"
              className="camera-feed"
            />
          </div>
        </div>

        {/* ⏱ LAST UPDATED */}
        <p className="time">
          {language === "en" ? "Last updated:" : "अंतिम अपडेट:"}{" "}
          {data.timestamp
            ? new Date(data.timestamp).toLocaleTimeString()
            : "—"}
        </p>
      </div>
    </div>
  );
}
