import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Services
import { getOne, assocApp } from './services/appService'
//Components



const AppDetails = ({ user }) => {
  const {id} = useParams
  const [app, setApp] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setApp(data.cat)
      // set Badge when available 
    }
    fetchOne()
  }, [id])
  
  if (!app) return <h1>Loading</h1>
  
  return ( 
    <>
      <section className="app-container">
        <div>
          <h1>{app.name}</h1>
          <p>{app.name}</p>
        </div>
      </section>
    </>
  );
}

export default AppDetails;