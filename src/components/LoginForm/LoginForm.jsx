import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">
                  Email
                </label>
              </td>
                <td>
                  <input
                    type="text"
                    autoComplete="off"
                    id="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    />
                  </td>                        
            </tr>
            <tr>
              <td>
                <label htmlFor="password">
                  Password
                </label>
              </td>
              <td>
                <input
                  type="password"
                  autoComplete="off"
                  id="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>          
        </table>
      <div>
        <button>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
