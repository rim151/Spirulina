import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sensorRef = ref(db, "sensors");

    onValue(sensorRef, (snapshot) => {
      const v = snapshot.val();
      if (!v) return;

      const point = {
        time: new Date(
          v.timestamp > 1e12 ? v.timestamp : v.timestamp * 1000
        ).toLocaleTimeString(),
        temperature: Number(v.temperature) || 0,
        humidity: Number(v.humidity) || 0,
        light: Number(v.light) || 0,
        airQuality: Number(v.airQuality) || 0,
      };

      // keep last 20 points locally
      setData((prev) => [...prev.slice(-19), point]);
    });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        Live Analytics
      </h1>

      <Chart title="Temperature (°C)" dataKey="temperature" color="#ef4444" data={data} />
      <Chart title="Humidity (%)" dataKey="humidity" color="#3b82f6" data={data} />
      <Chart title="Light (Lux)" dataKey="light" color="#f59e0b" data={data} />
      <Chart title="Air Quality" dataKey="airQuality" color="#22c55e" data={data} />
    </div>
  );
}

function Chart({ title, dataKey, color, data }) {
  return (
    <div style={{ width: "100%", height: 320, marginBottom: "40px" }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey={dataKey} stroke={color} strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
