import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Services
import * as appService from '../../services/appService'

//Components
import AppActions from "../AppActions/AppDelete";

const AppDetails = ({ user }) => {
  const {id} = useParams()
  const [app, setApp] = useState(null)

  useEffect(() => {
    const fetchOne = async (app) => {
      console.log(id)
      const data = await appService.getOne(id)
      console.log(data.app)
      setApp(data.app)
    }
    fetchOne()
  }, [id])
  
  if (!app) return <h1>Loading</h1>
  
  return ( 
    <>
      <section className="app-container">
        <div>
          <a href={app.link} className='container' target="_blank" rel="noreferrer" >
            <img src={app.photo} alt="" className="image"/>
            <div className="middle">
              <div className="text">{app.name}</div>
            </div>
          </a>
          <h1>{app.name}</h1>
          <p>by {app.author}</p>
          <p>{app.appType}</p>
          <p>{app.description}</p>
          <br />
          <AppActions app={app} user={user} />
        </div>
      </section>
    </>
  );
}

export default AppDetails;