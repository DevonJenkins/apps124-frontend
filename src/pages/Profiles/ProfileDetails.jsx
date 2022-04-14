import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

//Services
import * as profileService from "../../services/profileService"


//components
//import badges here 


const ProfileDetails = ( user, props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState()
  console.log(props.profile)
  
  useEffect(() => {
    console.log('line17: ', profile)
    const fetchOne = async () => {
      profileService.getOneProfile(id)
      .then(profile => setProfile(profile))
    }
    fetchOne()
  }, [id])
  
  return (  
    <>
    <h1>This is the profile details page</h1>
    <h1>
      user= {user.name} <br />
      userid= {user.id} <br />
      {console.log(props.profile)}
      {console.log(profile)}
    </h1>
    <h1>profile info</h1>
    
      {props.profile}
      {profile.id}
    </>
  );
}

export default ProfileDetails;