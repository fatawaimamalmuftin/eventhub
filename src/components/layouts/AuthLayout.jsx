import { Outlet, useNavigate } from "react-router"
import SideBarAuth from "../SideBarAuth"
import { useEffect } from "react"

export default function AuthLayout() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userLogind")||"null")
    const admin = JSON.parse(localStorage.getItem("admin")||"null")

    if(user){
      navigate(`/${user.fullName}`, {replace:true})
      return
    }

    if(admin){
      navigate(`/${admin.email}`, {replace:true})
      return
    }
  },[navigate])

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen overflow-hidden">
      <SideBarAuth />

      <section className="h-screen overflow-y-auto">
        <Outlet />
      </section>
    </main>
  )
}