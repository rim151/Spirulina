import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
    </>
  );
}
