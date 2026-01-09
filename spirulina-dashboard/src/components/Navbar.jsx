export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.jpg" alt="SpiraTech Logo" className="logo-img" />
        <span className="logo-text">SpiraTech</span>
      </div>

      <div className="nav-links">
        <span>Dashboard</span>
        <span>Analytics</span>
        <span>About</span>
      </div>
    </nav>
  );
}
