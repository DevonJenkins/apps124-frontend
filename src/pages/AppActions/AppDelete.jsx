import { useNavigate } from 'react-router-dom'

const AppActions = ({ app, user }) => {
  const navigate = useNavigate()
  return (
    app.profile_id === user.id &&
    <div className="actions">
      <button className="btn danger" onClick={() => navigate(`/apps/${app.id}/confirmation`, { state: app })}>Delete</button>
    </div>
  )
}

export default AppActions