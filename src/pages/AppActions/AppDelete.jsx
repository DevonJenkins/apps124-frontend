import { useNavigate } from 'react-router-dom'

const AppActions = ({ app, user }) => {
  const navigate = useNavigate()
  return (
    app.profile_id === user.id &&
    <div className="actions">
      <h1>This is the delete component</h1>
      <button className="btn warn" onClick={() => navigate(`/apps/${app.id}/edit`, { state: app })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/apps/${app.id}/confirmation`, { state: app })}>Delete</button>
    </div>
  )
}

export default AppActions