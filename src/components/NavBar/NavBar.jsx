import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li className='nav-el'>{user.name}</li>
            <li className='nav-el'><Link to="/">Home</Link></li>
            <li className='nav-el'><Link to="/profiles">Profiles</Link></li>
            <li> <NavLink to='/apps/new'> Add an app</NavLink> </li>
            <li> <NavLink to='/apps'> All Apps </NavLink> </li>
            <li className='nav-el'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
