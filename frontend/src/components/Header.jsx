import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
function Header() {
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };
  return (
    <div className='navbar'>
      <p><Link to="/search">Search Response Codes</Link></p>
      <p><Link to="/lists">View Saved Lists</Link></p>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header