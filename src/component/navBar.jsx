import { Link } from 'react-router-dom';
import '../component/navbar.css'
function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#0052CC', color: 'white' }} className='nav-bar'>
      <Link to="/login"  style={{marginRight:'1rem', color:'white'}} >Login</Link>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/directory" style={{ marginRight: '1rem', color: 'white' }}>Directory</Link>
      <Link to="/about" style={{ color: 'white',marginRight:"1rem" }}>About</Link>
      <Link to="/ghaleb" style={{color:'white',marginRight:"1rem"}}>Ghaleb</Link>
    </nav>
  );
}

export default Navbar;
