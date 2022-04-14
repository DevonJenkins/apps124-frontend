import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Services
import * as appService from '../../services/appService'


//Components

const AppDetails = ( props ) => {
  const {id} = useParams()
  const [app, setApp] = useState(null)
  console.log(props)
  console.log(app)
  console.log(appService.getOne.app)

  useEffect(() => {
    const fetchOne = async (app) => {
      console.log(id)
      const data = await appService.getOne(id)
      console.log(data.app)
      setApp(data.app)
      //.then(app => setApp(data.app))
      // set Badge when available 
    }
    fetchOne()
  }, [id])

  // useEffect(() => {
  //   const fetchOne = async () => {
  //     const data = await getOne(id)
  //     setApp(data.app)
     // setAvailableApps(data.available_apps)
  //   }
  //   fetchOne()
  // }, [id])
  
  if (!app) return <h1>Loading</h1>
  
  return ( 
    <>
      <section className="app-container">
        <div>
          <h1>{app.name}</h1>
          <p>{app.description}</p>
        </div>
      </section>
    </>
  );
}

export default AppDetails;