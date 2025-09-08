import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/homepage/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import PageTransitionOverlay from "./components/PageTransitionOverlay"
import About from  "./pages/AboutUs/About"
import { Contact } from "./pages/contact/contact"
import FaqPage from "./pages/faqpage/faqpage"
import Features from "./pages/Features/Features"

function App() {
  return (
    <Router>
      <Navbar />
      <PageTransitionOverlay />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FaqPage/>} />
        <Route path="/features" element={<Features/>} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
