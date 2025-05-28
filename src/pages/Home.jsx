import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css'
import { useState } from 'react';
function Home() {
    // const [darkMode, setDarkMode] = useState(false);
  return (
    
      <div style={{ padding: '2rem' }} className='home-container'>
      <h1>Welcome to TrainHub Jordan</h1>
      <p>Discover and connect with training companies across Jordan.</p>
      <Link to="/directory">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }} className='home-button'>
          Browse Companies
        </button>
      </Link>
     
    </div>
 
  );
}

export default Home;
