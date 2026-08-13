import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"

export default function Router() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Navbar/>}/>
      {/* <Route path={} element={}/> */}
    </Routes>
    </>
  )
}
