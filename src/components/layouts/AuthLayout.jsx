import { Outlet } from "react-router"
import SideBarAuth from "../SideBarAuth"

export default function AuthLayout() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen overflow-hidden">
      <SideBarAuth />

      <section className="h-screen overflow-y-auto">
        <Outlet />
      </section>
    </main>
  )
}