import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/homepage/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
