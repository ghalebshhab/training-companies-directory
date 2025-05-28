
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import navBar from './component/navBar';
import { useState } from 'react';
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
      <navBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
  );
}



export default App;
