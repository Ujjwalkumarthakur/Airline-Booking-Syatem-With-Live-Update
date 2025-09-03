import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

 function App() {
  // const [count, setCount] = useState(0)

  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/flights" element={<h1>Flights Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
