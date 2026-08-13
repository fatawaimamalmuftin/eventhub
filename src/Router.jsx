import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Router() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Navbar/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
