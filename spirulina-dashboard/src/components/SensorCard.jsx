import { useEffect, useState } from "react";

export default function SensorCard({
  title,
  value,
  unit,
  icon,

  // ThingSpeak props
  channelId,
  fieldNumber,
  readApiKey,
}) {
  const [liveValue, setLiveValue] = useState(value);

  useEffect(() => {
    if (!channelId || !fieldNumber) return;

    const fetchLatestValue = async () => {
      try {
        const res = await fetch(
          `https://api.thingspeak.com/channels/${channelId}/fields/${fieldNumber}/last.json?api_key=${readApiKey}`
        );
        const data = await res.json();

        const fieldKey = `field${fieldNumber}`;
        if (data && data[fieldKey] !== null) {
          setLiveValue(data[fieldKey]);
        }
      } catch (error) {
        console.error("ThingSpeak fetch error:", error);
      }
    };

    fetchLatestValue();
    const interval = setInterval(fetchLatestValue, 15000); // 15 sec refresh

    return () => clearInterval(interval);
  }, [channelId, fieldNumber, readApiKey]);

  return (
    <div className="card">
      {/* Title */}
      <p className="card-title">
        {icon} {title}
      </p>

      {/* LIVE NUMERIC VALUE */}
      {liveValue !== undefined && (
        <h2>
          {Number(liveValue).toFixed(2)} {unit}
        </h2>
      )}

      {/* ThingSpeak Graph */}
      {channelId && fieldNumber && (
        <iframe
          title={`${title}-thingspeak`}
          width="100%"
          height="200"
          style={{
            border: "none",
            marginTop: "10px",
            borderRadius: "8px",
          }}
          src={`https://thingspeak.com/channels/${channelId}/charts/${fieldNumber}?api_key=${readApiKey}&results=60&dynamic=true`}
        />
      )}
    </div>
  );
}
