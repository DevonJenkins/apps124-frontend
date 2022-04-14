import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>all the profiles</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
          <Link
            
            to={`/profiles/${profile.id}`}
            className="app-link"
            profile={profile}
            > 
            <h1 key={profile._id}>
              {profile.name} 
            </h1>
          </Link>
          )}
        </>
          
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles