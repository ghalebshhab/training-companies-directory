
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Login from './pages/Login'
import Ghaleb from './pages/Ghaleb';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <header>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about" element={<About />} />
        <Route path="/ghaleb" element={<Ghaleb />}/>
      </Routes>
      </div>
    </Router>
  );
}



export default App;
