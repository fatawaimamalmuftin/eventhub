import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Outlet, Navigate } from "react-router";

export default function GuestLayout() {

  const user = JSON.parse(localStorage.getItem("userLogind")||"null")
  const admin = JSON.parse(localStorage.getItem("admin")||"null")

  if(user){
    return <Navigate to={`/${user.fullName}`} replace/>
  }

  if(admin){
    return <Navigate to={`/${admin.email}`} replace/>
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}