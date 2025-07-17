import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Tutor PAL</Link>
         <img src={logo} alt="Company Logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;