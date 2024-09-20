import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"
import Footer from "./components/Home/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Properties from "./screens/Properties"
import PropertyDetails from "./screens/PropertyDetails"
import ContactUs from "./screens/ContactUs"

function App() {

  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Home />
            </>} />
          <Route path="/properties" element={
            <>
              <NavBar />
              <Properties />
            </>} />
          <Route path="/property-details" element={
            <>
              <NavBar />
              <PropertyDetails />
            </>} />
          <Route path="/contact" element={
            <>
              <NavBar />
              <ContactUs />
            </>} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
