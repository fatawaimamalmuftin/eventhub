import { Routes, Route, Navigate } from "react-router";
import Event from "./pages/guest/Event.jsx";
import Comunities from "./pages/guest/Comunities.jsx";
import GuestLayout from "./components/layouts/GuestLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Regis from "./pages/auth/Regis.jsx";
import Forgot from "./pages/auth/Forgot.jsx";
import AuthLayout from "./components/layouts/AuthLayout.jsx";

export default function Router() {
  return (
    <Routes>

      {/* guest */}
      <Route path="/" element={<Navigate to="/guest" replace/>}/>
      <Route path="/guest" element={<GuestLayout />}>
        <Route index element={<Event />} />
        <Route path="comunities" element={<Comunities />} />
      </Route>

      {/* auth */}
      <Route path="/login" element={<Navigate to="/auth/login" replace/>}/>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Regis />} />
        <Route path="forgotPassword" element={<Forgot />} />
      </Route>
      
    </Routes>
  );
}