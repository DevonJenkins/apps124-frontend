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
          <div >
            
              {profiles.map(profile=>
              <Link
                key={profile._id}
                to={`/profiles/${profile.id}`}
                className="app-link"
                profile={profile}
                > 
                <h1 >
                  {profile.name} 
                </h1>
              </Link>
              )}
          </div>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles