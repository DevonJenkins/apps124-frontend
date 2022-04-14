import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/apps/`

export const create = async (app) => {
  try{
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(app),
    })
    return await res.json()
  } catch(error) {
    throw error
  }
}

export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOne = async (id) => {
  console.log(id)
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const deleteOneApp = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const update = async (app) => {
  // try {
  //   const res = await fetch(`${BASE_URL}${app.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': `Bearer ${tokenService.getToken()}`
  //     },
  //     body: JSON.stringify(app)
  //   })
  //   return await res.json()
  // } catch (error) {
  //   throw error
  // }
}

export const deleteOne = async (id) => {
  // try {
  //   const res = await fetch(`${BASE_URL}${id}`, {
  //     method: "DELETE",
  //     headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
  //   })
  //   return await res.json()
  // } catch (error) {
  //   throw error
  // }
}

