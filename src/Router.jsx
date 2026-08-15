import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Event from "./pages/guest/Event.jsx";
import Communities from "./pages/guest/Communities.jsx";

export default function Router() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/comunities" element={<Communities />} />
      </Routes>

      <Footer />
    </>
  );
}