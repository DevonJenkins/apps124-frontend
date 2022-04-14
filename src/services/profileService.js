import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles/`


//refactor this
async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    method:"GET",
    headers: { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify()
  })
  return await res.json()
}

export const getOneProfile = async (id) => {
  console.log('getOneProfile service:', id)
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { getAllProfiles } 