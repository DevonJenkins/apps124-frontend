import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as profileService from "../../services/profileService"

//Services
import { getOneProfile } from "../../services/profileService";

//components
//import badges here 


const ProfileDetails = ({ user }) => {
  const { id } = useParams()
  const [profile, setProfile] = useState()
  console.log(profile)

  useEffect(() => {
    const fetchOne = async () => {
      //console.log(profile)
      profileService.getOneProfile(id)
      .then(profile => setProfile(profile))
    }
    fetchOne()
  }, [id])

  return (  
    <>
    <h1>This is the profile details page</h1>
    <h1>
      {user.name} 
    </h1>
      <h3>
        #{user.id} 
      </h3>
    </>
  );
}

export default ProfileDetails;