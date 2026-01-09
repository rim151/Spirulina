export default function SensorCard({
  title,
  value,
  unit,
  icon,

  // OPTIONAL ThingSpeak props (new)
  channelId,
  fieldNumber,
  readApiKey,
}) {
  return (
    <div className="card">
      <p className="card-title">
        {icon} {title}
      </p>

      {/* Existing value display (unchanged behavior) */}
      {value !== undefined && (
        <h2>
          {value} {unit}
        </h2>
      )}

      {/* OPTIONAL ThingSpeak graph */}
      {channelId && fieldNumber && (
        <iframe
          title={`${title}-graph`}
          width="100%"
          height="200"
          style={{ border: "none", marginTop: "10px" }}
          src={`https://thingspeak.com/channels/${channelId}/charts/${fieldNumber}?api_key=${readApiKey}&results=60`}
        />
      )}
    </div>
  );
}
