import { Link } from "react-router-dom";
import { useState } from "react";

const AppList = ({ apps }) => {
  const [app, setApp] = useState([])
  return ( 
    <>
      <h1>Hello. This is the apps list</h1>
      {apps.map((app) => (

        <h2 > 
          < Link 
              to={`/apps/${app.id}`}
              app={app}
              setApp={setApp}
              key={app.id}
              className="app-link"
            >
            {app.name}
          </Link>
        </h2>
      )
      )}
    </>
    );  
}

export default AppList;