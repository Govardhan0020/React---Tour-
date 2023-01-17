import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { useLogout } from "../../Hooks/useLogout"
import { useAuthContext } from '../../Hooks/useAuthContext'



const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  }
  return (
    <nav className='Nav'>
      <Link to="/"><h1>Tourism</h1></Link>
      <div className='Menu'>
        <Link to='/'>Home</Link>
        <Link to='/locations'>Locations</Link>

        {!user && <div className='auth'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Register</Link>
        </div>}

        {user && <div className='Logout'>
      
          <button onClick={handleClick}>Logout</button>
        </div>}

      </div>
    </nav>
  )
}

export default Nav