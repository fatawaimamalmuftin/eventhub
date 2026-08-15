import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}