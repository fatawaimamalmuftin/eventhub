import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function GuestLayout() {

  const user = useSelector((state) => state.userState.user)

  const admin = JSON.parse(localStorage.getItem("admin")||"null")
  
  const comunities = JSON.parse(localStorage.getItem("comunities")||"null")

  if(user || admin || comunities){
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