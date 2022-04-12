import { Link } from "react-router-dom";

const AppList = ({ apps }) => {
  return ( 
    <>
      <h1>Hello. This is the apps list</h1>
      {apps.map((app) => (

        <h2> 
          < Link 
            to={`/apps/${app.id}`}>
            {app.name}
          </Link>
        </h2>
      )
      )}
    </>
    
    );  
}

export default AppList;