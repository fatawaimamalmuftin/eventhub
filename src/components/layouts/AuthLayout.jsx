import { Outlet } from "react-router"
import SideBarAuth from "../SideBarAuth"

export default function AuthLayout() {
  return (
    <>
    <main className="grid grid-cols-2 h-screen w-screen">
      <SideBarAuth/>
      <Outlet/>
    </main>
    </>
  )
}
