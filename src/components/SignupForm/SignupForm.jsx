import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
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
              <label htmlFor="name" >Name</label>
            </td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr >
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password" >Password</label>
            </td>
            <td>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td >
              <label htmlFor="confirm">
                Confirm Password
              </label>
            </td>
            <td>
              <input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
