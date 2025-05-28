import { Link } from 'react-router-dom';
import '../component/navbar.css'
function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#0052CC', color: 'white' }} className='nav-bar'>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/directory" style={{ marginRight: '1rem', color: 'white' }}>Directory</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
    </nav>
  );
}

export default Navbar;
