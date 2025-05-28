
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import navBar from './component/navBar';

function App() {
  return (
    <Router>
      <navBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
