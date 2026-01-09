export default function SensorCard({ title, value, unit, icon }) {
  return (
    <div className="card">
      <p className="card-title">{icon} {title}</p>
      <h2>{value} {unit}</h2>
    </div>
  );
}
