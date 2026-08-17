import { Navigate, Outlet, useParams } from "react-router"
import Navbar from "../Navbar"
import Footer from "../Footer"

export default function UserLayout() {
    
    const {username} = useParams()

    const user = JSON.parse(localStorage.getItem("userLogind")||"null")
    const admin = JSON.parse(localStorage.getItem("admin")||"null")

    if(!(user || admin)){
        return <Navigate to="/auth/login" replace/>
    }

    if(user){
        if(username !== user.fullName){
            return <Navigate to={`/${user.fullName}`} replace/>
        }
    }

    if(admin){
        if(username !== admin.email){
            return <Navigate to={`/${admin.email}`} replace/>
        }
    }

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
