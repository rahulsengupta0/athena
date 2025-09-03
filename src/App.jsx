import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from "./pages/homepage/home"

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
