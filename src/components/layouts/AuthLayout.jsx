import { Navigate, Outlet } from "react-router"
import SideBarAuth from "../SideBarAuth"
import { useSelector } from "react-redux"

export default function AuthLayout() {

  const user = useSelector((state) => state.userState.user)

  const admin = JSON.parse(localStorage.getItem("admin")||"null")

  const comunities = JSON.parse(localStorage.getItem("comunities")||"null")

  if(user || admin || comunities){
    return <Navigate to="/guest" replace/>
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen overflow-hidden">
      <SideBarAuth />

      <section className="h-screen overflow-y-auto">
        <Outlet />
      </section>
    </main>
  )
}