import { Routes, Route, Navigate } from "react-router";
import Event from "./pages/guest/Event.jsx";
import Comunities from "./pages/guest/Comunities.jsx";
import GuestLayout from "./components/layouts/GuestLayout.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/guest" replace/>}/>
      <Route path="/guest" element={<GuestLayout />}>
        <Route index element={<Event />} />
        <Route path="comunities" element={<Comunities />} />
      </Route>
    </Routes>
  );
}