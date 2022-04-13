import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Services
import { getOne } from '../../services/appService'

//Components



const AppDetails = ({ user }) => {
  const {id} = useParams
  const [app, setApp] = useState(null)


  useEffect(() => {
    console.log(app)
    const fetchOne = async () => {
      const data = await getOne(id)
      console.log(app)
      setApp(data.app)
      // set Badge when available 
    }
    fetchOne()
  }, [id])
  
  if (!app) return <h1>Loading</h1>
  
  return ( 
    <>
      <section className="app-container">
        <div>
          <h1>{app}</h1>
          <p>{app.description}</p>
        </div>
      </section>
    </>
  );
}

export default AppDetails;