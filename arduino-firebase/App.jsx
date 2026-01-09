import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const sensorRef = ref(db, "sensors");
    onValue(sensorRef, (snapshot) => {
      console.log("Firebase:", snapshot.val());
      setData(snapshot.val());
    });
  }, []);

  if (!data) return <h2>Loading live data...</h2>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🌱 Spirulina Live Dashboard</h1>

      <p>🌡 Temperature: <b>{data.temperature} °C</b></p>
      <p>💧 Humidity: <b>{data.humidity} %</b></p>
      <p>🌫 Air Quality: <b>{data.airQuality}</b></p>

      <p style={{ color: "green", fontWeight: "bold" }}>
        ✅ Live data from Firebase
      </p>
    </div>
  );
}

export default App;
