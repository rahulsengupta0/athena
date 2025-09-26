import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/homepage/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import PageTransitionOverlay from "./components/PageTransitionOverlay"
import About from  "./pages/AboutUsPage/About"
import { Contact } from "./pages/contactpage/contact"
import FaqPage from "./pages/faqpages/faqpage"
import Features from "./pages/FeaturesPage/Features"
import WhyUs from "./pages/WhyusPage/WhyUs"

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
        <Route path="/whyus" element={<WhyUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
