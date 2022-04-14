import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import AppForm from './pages/Forms/AppForm'
import AppList from './pages/AppList/AppList'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


//Services
import * as authService from './services/authService'
import * as appService from './services/appService'
import * as profileService from './services/profileService'

import AppDetails from './pages/AppDetails/AppDetails'
import ProfileDetails from './pages/Profiles/ProfileDetails'


function App() {
  const navigate = useNavigate()
  const [apps, setApps] = useState([])
  const [app] = useState([])
  const [profile, setProfile] = useState([])
  const [user, setUser] = useState(authService.getUser())
  //console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleGetProfile = () => {
    setProfile(profileService.getOneProfile())
  }

  const addApp = async (appData) => {
    const app = await appService.create(appData)
    setApps([...apps, app])
  }

  // const updateApp = async (appData) => {
  //   const updateApp = await appService.update(appData)
  //   setApps(apps.map((app) => (
  //     app.id === updateApp.id ? updateApp : app
  //   )))
  // }

  useEffect(() => {
    const fetchData = async () => {
      const data = await appService.getAll()
      setApps(data)
    }
    fetchData()
  }, [])  

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <br />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" profile={profile} />}
        />
        <Route
          path="/profiles/:id"
          element={user ? <ProfileDetails user={user} profile={profile} handleGetProfile={handleGetProfile} /> : <Navigate to="/login" />}
        />
        <Route 
          path="/apps/new" element={
            <ProtectedRoute user={user}>
              < AppForm addApp={addApp} user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apps"
          element = {
            <ProtectedRoute user={user}>
              < AppList user={user} apps={apps} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/apps/:id"
          element = {

            <ProtectedRoute user={user}>
              <AppDetails user={user} app={app} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
