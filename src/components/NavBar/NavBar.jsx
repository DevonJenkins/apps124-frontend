import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar'>
          <div className='dropdown'>
            <ul>
              <li>launch-terminal
                <ul className='dropdown-content'>
                  <li className='nav-el'><Link to="/"> ~ cd /apps124</Link></li>
                  <li> <NavLink to='/apps/new'> ~ cd apps124/add-an-app</NavLink> </li>
                  <li> <NavLink to='/apps'> ~ cd /apps124/all-apps </NavLink> </li>
                  <li className='nav-el'><Link to="" onClick={handleLogout}>~ cd /apps124/log-out</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      :
        <nav className='navbar'>
          <div>
            <ul>
              <li>launch-terminal
                <ul className='dropdown-content'>
                  <li><Link to="/login">~ cd /log-in</Link></li>
                  <li><Link to="/signup">~ cd /signup</Link></li>
                  <li> 
                    <NavLink to='/apps'>~ cd /view-apps </NavLink>
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
