import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            {/* do I want this here? */}
            <h1 className='nav-el'>{user.name}</h1>
            <li className='nav-el'><Link to="/">Home</Link></li>
            {/* this is a stretch goal item. Uncomment if you have time to work out profile show functionality before presentation */}
            {/* <li className='nav-el'><Link to="/profiles">Profiles</Link></li> */} 
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
            <li> 
              <NavLink to='/apps'> All Apps </NavLink>
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
