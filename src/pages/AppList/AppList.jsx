import { Link } from "react-router-dom";


const AppList = ({ apps }) => {
  return ( 
    <>
      <h1>Hello. This is the apps list</h1>
      {apps.map((app) => (

        <h2 key={app.id} > 
          < Link 
              to={`/apps/${app.id}`}
              app={app}

              
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