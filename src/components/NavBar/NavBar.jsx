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
                  <NavLink to="/"> 
                    <li>
                      ~ cd /apps124 
                    </li>
                  </NavLink>
                  <NavLink to='/apps/new'> 
                    <li>
                      ~ cd apps124/add-an-app
                    </li> 
                  </NavLink>
                  <NavLink to='/apps'> 
                      <li>
                        ~ cd /apps124/all-apps 
                      </li>
                    </NavLink>
                  <NavLink to="" onClick={handleLogout}> 
                    <li>
                      ~ cd /apps124/log-out
                    </li>
                  </NavLink>
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
                  <NavLink to="/login">
                    <li>
                      ~ cd /log-in
                    </li>
                  </NavLink>
                  <NavLink to="/signup">~ cd /signup</NavLink>
                  <li> 
                    <NavLink to='/apps'>
                      <li>
                        ~ cd /view-apps 
                      </li>
                      </NavLink>
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
