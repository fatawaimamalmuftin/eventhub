import { Outlet, useNavigate } from "react-router"
import SideBarAuth from "../SideBarAuth"
import { useEffect } from "react"

export default function AuthLayout() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = localStorage.getItem("userLogind")
    const admin = localStorage.getItem("admin")

    if(user || admin){
      navigate("/", {replace:true})
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