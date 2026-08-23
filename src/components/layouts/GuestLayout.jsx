import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function GuestLayout() {

  const user = useSelector((state) => state.userState.user)

  const admin = JSON.parse(localStorage.getItem("admin")||"null")

  if(user || admin){
    return <Navigate to="/" replace/>
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

}