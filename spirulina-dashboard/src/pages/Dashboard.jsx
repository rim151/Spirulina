import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import SensorCard from "../components/SensorCard";

export default function Dashboard({ language }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const r = ref(db, "sensors");
    onValue(r, (snap) => {
      setData(snap.val());
    });
  }, []);

  if (!data) return <p className="loading">Loading live data...</p>;

  return (
    // ✅ ID added for navbar scroll (NO logic change)
    <div className="dashboard-wrapper" id="live-data">
      <div className="dashboard">
        <h1 className="dashboard-title">
          {language === "en"
            ? "Live Monitoring Dashboard"
            : "लाइव निगरानी डैशबोर्ड"}
        </h1>

        <div className="status-row">
          <span className="status-dot"></span>
          <span>
            {language === "en"
              ? "System Online · Real-time Firebase Sync"
              : "सिस्टम ऑनलाइन · रियल-टाइम फायरबेस सिंक"}
          </span>
        </div>

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
