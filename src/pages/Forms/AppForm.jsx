import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOne } from '../../services/appService'

import AppInput from './AppInput'

const AppForm = (props) => {
  const id = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    //id ? props.updateApp(form) : 
    props.addApp(form)
    navigate(`/apps`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.app.id,
        name: data.app.name,
        description: data.app.description,
        type: data.app.type,
        photo: data.app.photo,
        author: data.app.author,
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (  
    <>
      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <AppInput form={form} handleChange={handleChange} /> 
          <br />
          <button type='submit' className='btn-submit'>Submit</button>
        </form>
      </section>
    </>
  );
}

export default AppForm;

