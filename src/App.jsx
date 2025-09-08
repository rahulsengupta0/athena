import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/homepage/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import About from  "./pages/AboutUs/About"

function App() {
  return (
    <Router>
      <Navbar />
      <PageTransitionOverlay />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
