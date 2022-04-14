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
          <h1>{app.name}</h1>
          <p>{app.description}</p>
          <p>This is an app</p>
          <br />
          <AppActions app={app} user={user} />
        </div>
      </section>
    </>
  );
}

export default AppDetails;