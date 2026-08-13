import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Event from "./pages/Event"

export default function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Event/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
