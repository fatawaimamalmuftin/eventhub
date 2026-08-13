import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Event from "./pages/Event"
import Communities from "./pages/Communities"

export default function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Event/>}/>
      <Route path={'/comunities'} element={<Communities/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
