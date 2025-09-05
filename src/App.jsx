import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/homepage/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import { Contact } from "./pages/contact/contact";
import FaqPage from "./pages/faqpage/faqpage";

function App() {
  return (
    <Router>
      <Navbar />
      <PageTransitionOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FaqPage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
