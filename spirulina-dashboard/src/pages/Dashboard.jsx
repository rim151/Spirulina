import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import SensorCard from "../components/SensorCard";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const r = ref(db, "sensors");
    onValue(r, snap => setData(snap.val()));
  }, []);

  if (!data) return <p className="loading">Loading live data...</p>;

  return (
  <div className="dashboard-wrapper">
    <div className="dashboard">
      <h1 className="dashboard-title">Live Monitoring Dashboard</h1>

      <div className="status-row">
        <span className="status-dot"></span>
        <span>System Online · Real-time Firebase Sync</span>
      </div>

      <div className="grid">
        <SensorCard title="Temperature" value={data.temperature} unit="°C" icon="🌡" />
        <SensorCard title="Humidity" value={data.humidity} unit="%" icon="💧" />
        <SensorCard title="Light Intensity" value={data.light} unit="lux" icon="💡" />
        <SensorCard title="Air Quality" value={data.airQuality} unit="" icon="🌫" />
      </div>

      <p className="time">
        Last updated: {new Date(data.timestamp).toLocaleTimeString()}
      </p>
    </div>
  </div>
);

}
