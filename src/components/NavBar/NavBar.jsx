import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar'>
          <div className='dropdown'>
            <ul>
              <li>launch terminal
                <ul className='dropdown-content'>
                  <li className='nav-el'><Link to="/"> ~ cd /apps124</Link></li>
                  <li> <NavLink to='/apps/new'> ~ cd apps124/add-an-app</NavLink> </li>
                  <li> <NavLink to='/apps'> ~ cd /apps124/all-apps </NavLink> </li>
                  <li className='nav-el'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      :
        <nav className='navbar'>
          <div>
            <ul>
              <li>launch terminal
                <ul className='dropdown-content'>
                  <li><Link to="/login">Log In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li> 
                    <NavLink to='/apps'> All Apps </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      }

    </>
  )
}

export default NavBar
